// src/hooks/useLocalStorage.js

import { useState, useEffect } from 'react';

/**
 * Hook personalizado para persistir el estado de React en localStorage.
 * @param {string} key - Clave bajo la cual se almacenará el valor en localStorage.
 * @param {any} initialValue - Valor inicial si no hay nada en localStorage.
 * @returns {[any, Function]} - El valor y la función para actualizarlo.
 */
const useLocalStorage = (key, initialValue) => {
  // 1. Inicializa el estado, intentando cargar datos de localStorage
  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      // Si hay un valor guardado, lo parseamos (JSON.parse) y lo usamos
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      // Si falla, usamos el valor inicial
      console.error("Error leyendo localStorage:", error);
      return initialValue;
    }
  });

  // 2. Efecto para guardar el estado en localStorage cada vez que 'value' cambia
  useEffect(() => {
    try {
      // Guardamos el valor serializado como JSON (JSON.stringify)
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error escribiendo en localStorage:", error);
    }
  }, [key, value]); // Se ejecuta cuando la clave o el valor cambian

  return [value, setValue];
};

export default useLocalStorage;