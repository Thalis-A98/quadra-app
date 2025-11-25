export default function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Quadra App</h1>
      <p className="text-lg mb-6">
        Reserve seu horário de forma rápida e simples.
      </p>

      <a
        href="/reserva"
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold"
      >
        Ver Horários Disponíveis
      </a>

      <div className="mt-10">
        <img
          src="https://placehold.co/600x300/222/fff?text=Foto+da+Quadra"
          className="mx-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
