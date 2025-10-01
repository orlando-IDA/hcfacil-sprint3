const SobrePage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sobre o HC Fácil
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conheça nossa missão e propósito
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Nossa Missão</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              O HC Fácil foi desenvolvido como parte do Challenge da FIAP com o objetivo 
              principal de <strong>reduzir a taxa de abstenção em consultas online</strong> 
              no Hospital das Clínicas.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Acreditamos que através de uma plataforma mais simples, intuitiva e eficiente, 
              podemos melhorar significativamente a experiência dos pacientes no agendamento 
              e acompanhamento de suas consultas médicas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">🎯 Objetivos</h3>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Simplificar o processo de agendamento
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Reduzir faltas em consultas marcadas
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Oferecer suporte e tirar dúvidas
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Disponibilizar tutoriais e orientações
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-green-900 mb-4">💡 Benefícios</h3>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Interface amigável e responsiva
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Processo de agendamento simplificado
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Suporte ao paciente 24/7
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Redução de custos operacionais
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mt-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Juntos por uma saúde mais acessível
            </h3>
            <p className="text-gray-700 text-lg">
              O HC Fácil é mais que um projeto acadêmico - é nossa contribuição 
              para uma saúde pública mais eficiente e humanizada.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SobrePage;