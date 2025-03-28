import { Mail, Phone, MapPin, Instagram, ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <div className="w-full bg-black text-white py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block bg-zinc-900 px-4 py-1 rounded-full mb-4">
            <span className="text-sm font-medium" style={{ color: "#FFD700" }}>
              FALE CONOSCO
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-2 text-white">
            Entre em <span style={{ color: "#FFD700" }}>contato</span>
          </h2>
          <div className="w-20 h-1 bg-zinc-700 mt-6 mb-4"></div>
          <p className="text-center text-gray-300 max-w-2xl">
            Estamos prontos para ajudar você a se tornar um profissional de
            sucesso
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card de Telefone */}
          <div className="bg-zinc-900 rounded-xl p-6 text-center hover:transform hover:-translate-y-1 transition-all duration-300 border border-zinc-800">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-7 w-7" style={{ color: "#FFD700" }} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Telefone</h3>
            <p className="text-gray-300">(43) 99603-3429</p>
          </div>

          {/* Card de Email */}
          <div className="bg-zinc-900 rounded-xl p-6 text-center hover:transform hover:-translate-y-1 transition-all duration-300 border border-zinc-800">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-7 w-7" style={{ color: "#FFD700" }} />
            </div>
            <h3 className="text-xl font-semibold mb-2">E-mail</h3>
            <p className="text-gray-300">contato@metodosuperbi@gmail.com</p>
          </div>

          {/* Card de Endereço */}
          <div className="bg-zinc-900 rounded-xl p-6 text-center hover:transform hover:-translate-y-1 transition-all duration-300 border border-zinc-800">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-7 w-7" style={{ color: "#FFD700" }} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Endereço</h3>
            <p className="text-gray-300">
              R. Júlio César Ribeiro, 768 |Jardim Lolata - Londrina, PR
            </p>
          </div>
        </div>

        {/* Instagram Banner */}
        <div className="mt-12 bg-gradient-to-r from-zinc-900 to-black rounded-xl p-8 border border-zinc-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mr-6">
                <Instagram className="h-8 w-8" style={{ color: "#FFD700" }} />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl text-nowrap font-bold mb-1">
                  Siga-nos no Instagram
                </h3>
                <p className="text-gray-300">@aferdoscilios</p>
              </div>
            </div>
            <a
              href="https://instagram.com/aferdoscilios"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 rounded-full transition-colors"
              style={{ backgroundColor: "#FFD700", color: "black" }}
            >
              <span className="font-medium mr-2">Seguir</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
