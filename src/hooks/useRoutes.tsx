import React from 'react';
import { useEffect, useState } from 'react';
import { RouteObject } from 'react-router-dom';

export function useRoutes(): RouteObject[] {
  const [routes, setRoutes] = useState<RouteObject[]>([]);

  useEffect(() => {
    async function loadRoutes() {
      const pages = import.meta.glob('/src/pages/**/index.tsx');
      const routePromises = Object.entries(pages).map(async ([path, importPage]) => {
        const relativePath = path
          .replace('/src/pages', '')
          .replace('/index.tsx', '')
          .toLowerCase();
        
        const normalizedPath = relativePath === '' ? '/' : relativePath;
        const component = await importPage();
        
        return {
          path: normalizedPath,
          element: React.createElement(component.default)
        };
      });

      const loadedRoutes = await Promise.all(routePromises);
      setRoutes(loadedRoutes);
    }

    loadRoutes();
  }, []);

  return routes;
}