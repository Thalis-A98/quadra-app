export default function Reserva() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Escolha seu horário</h1>

      <div className="bg-gray-800 p-6 rounded-lg">
        <p className="text-gray-300 mb-4">
          Aqui futuramente vamos carregar os horários do backend.
        </p>

        <ul className="space-y-3">
          <li className="flex justify-between bg-gray-700 p-4 rounded">
            <span>07:00</span>
            <button className="bg-green-600 px-4 py-2 rounded">Reservar</button>
          </li>

          <li className="flex justify-between bg-gray-700 p-4 rounded opacity-40">
            <span>08:00</span>
            <span className="text-red-400">Reservado</span>
          </li>

          <li className="flex justify-between bg-gray-700 p-4 rounded">
            <span>09:00</span>
            <button className="bg-green-600 px-4 py-2 rounded">Reservar</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
