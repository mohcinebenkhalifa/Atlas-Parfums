
import React from 'react';
import { MapPin } from 'lucide-react';

const Map = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex items-center justify-between p-4 bg-moroccan-gold/5 border-b border-moroccan-gold/20">
        <h3 className="text-lg font-semibold text-moroccan-burgundy">
          Carte Interactive
        </h3>
      </div>
      
      <div className="h-96 w-full">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26875.050416206217!2d-8.450235363401584!3d32.649295902614135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdaf28e15c89e487%3A0x274db028f84d4095!2sSidi%20Bennour!5e0!3m2!1sfr!2sma!4v1748343141579!5m2!1sfr!2sma" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Carte Google Maps - Sidi Bennour"
        />
      </div>
      
      <div className="p-4 bg-moroccan-gold/5 border-t border-moroccan-gold/20">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="h-4 w-4 text-moroccan-gold" />
          <span>Sidi Bennour, Maroc</span>
        </div>
      </div>
    </div>
  );
};

export default Map;
