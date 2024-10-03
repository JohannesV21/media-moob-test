/**
 * Componente que muestra un esqueleto de carga para los productos mientras se están obteniendo los datos.
 *
 * @returns {JSX.Element} - Un elemento JSX que representa una tarjeta de carga, diseñada para mostrar durante
 * el tiempo que los productos están siendo obtenidos desde el servidor.
 *
 * @example
 * // Ejemplo de uso en un componente principal cuando los productos están cargando:
 * if (isLoading) {
 *   return <ProductLoadingCard />;
 * }
 */

export default function ProductLoadingCard() {
  return (
    <div className="w-full h-80 bg-gray-800 rounded-2xl relative overflow-hidden animate-pulse">
      <div className="absolute top-0 left-0 m-4">
        <div className="w-32 h-6 bg-gray-700 rounded-lg mb-2"></div>
      </div>
      <div className="absolute top-0 right-0 m-4">
        <div className="w-16 h-8 bg-gray-700 rounded-lg"></div>
      </div>
    </div>
  );
}
