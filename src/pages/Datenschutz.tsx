import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import Navbar from '@/components/studio/Navbar';
import Footer from '@/components/studio/Footer';
import SEO from '@/components/SEO';

const Datenschutz: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
      <SEO
        title="Datenschutzerklärung | Studio100 Webdesign"
        description="Datenschutzerklärung von Studio100 – Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäss DSGVO und dem schweizerischen Datenschutzgesetz (revDSG)."
        canonical="/datenschutz"
        noindex={true}
      />
      <Navbar />
      <main className="flex-1 pt-32 lg:pt-40 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition mb-10"
          >
            <ArrowLeft size={16} /> Zurück zur Startseite
          </Link>
          <div className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-4">
            Rechtliches
          </div>
          <h1 className="text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
            Datenschutzerklärung
          </h1>
          <p className="mt-4 text-sm text-neutral-500">
            Stand: {new Date().toLocaleDateString('de-CH')}
          </p>

          <div className="mt-12 space-y-10 text-[15px] text-neutral-700 leading-relaxed">

            {/* 1 */}
            <div>
              <h2 className="text-xl font-semibold text-neutral-900 mb-3">1. Verantwortliche Person</h2>
              <p>
                Verantwortlich für die Bearbeitung Ihrer Personendaten im Sinne des schweizerischen
                Datenschutzgesetzes (revDSG) und der europäischen Datenschutz-Grundverordnung (DSGVO):
              </p>
              <div className="mt-3 p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <p className="font-medium text-neutral-900">Rosiello Solutions GmbH</p>
                <p>Adresse: Gotthardstrasse 14, 6300 Zug, Schweiz</p>
                <p>E-Mail: <a href="mailto:schlaepfer.demian@gmail.com" className="underline hover:no-underline">schlaepfer.demian@gmail.com</a></p>
                <p>Website: <a href="https://www.studio-100.de" className="underline hover:no-underline">www.studio-100.de</a></p>
              </div>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-xl font-semibold text-neutral-900 mb-3">2. Welche Daten wir erheben</h2>
              <p>Wir erheben folgende Kategorien von Personendaten:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li><strong>Kontaktdaten:</strong> Name, E-Mail-Adresse, Telefonnummer, Unternehmensname</li>
                <li><strong>Projektdaten:</strong> Website-Link, Projektbeschreibung, Budget, gewünschter Startzeitpunkt</li>
                <li><strong>Technische Daten:</strong> IP-Adresse, Browser-Typ, Betriebssystem, Seitenaufrufe</li>
                <li><strong>Nutzungsdaten:</strong> Verhalten auf der Website, Klickpfade, Verweildauer</li>
              </ul>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-xl font-semibold text-neutral-900 mb-3">3. Zweck der Datenbearbeitung</h2>
              <p>Wir bearbeiten Ihre Daten für folgende Zwecke:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Bearbeitung und Beantwortung von Kontaktanfragen</li>
                <li>Erstellung von Angeboten und Projektkommunikation</li>
                <li>Verbesserung unserer Website und Dienstleistungen</li>
                <li>Analyse des Nutzerverhaltens zur Website-Optimierung</li>
                <li>Erfüllung gesetzlicher Pflichten</li>
              </ul>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-xl font-semibold text-neutral-900 mb-3">4. Rechtsgrundlage</h2>
              <p>
                Die Bearbeitung Ihrer Daten erfolgt auf Basis Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO),
                zur Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO), zur Erfüllung rechtlicher Verpflichtungen
                (Art. 6 Abs. 1 lit. c DSGVO) sowie auf Basis berechtigter Interessen (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-xl font-semibold text-neutral-900 mb-3">5. Speicherdauer</h2>
              <p>
                Wir speichern Ihre Daten nur so lange, wie es für den jeweiligen Zweck erforderlich ist oder
                gesetzliche Aufbewahrungspflichten bestehen. Kontaktanfragen werden nach Abschluss der
                Kommunikation und spätestens nach 2 Jahren gelöscht, sofern kein Vertragsverhältnis entsteht.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-xl font-semibold text-neutral-900 mb-3">6. Drittanbieter und Datenübermittlung</h2>
              <p>Wir setzen folgende Drittanbieter ein, an die Daten übermittelt werden können:</p>
              <div className="mt-3 space-y-3">
                {[
                  { name: 'Vercel Inc.', location: 'USA', purpose: 'Hosting und Bereitstellung der Website', link: 'https://vercel.com/legal/privacy-policy' },
                  { name: 'Google LLC (Google Analytics)', location: 'USA', purpose: 'Website-Analyse und Nutzungsstatistiken', link: 'https://policies.google.com/privacy' },
                  { name: 'Vercel Analytics', location: 'USA', purpose: 'Performance-Messung der Website', link: 'https://vercel.com/legal/privacy-policy' },
                  { name: 'Resend Inc.', location: 'USA', purpose: 'Versand von E-Mail-Benachrichtigungen', link: 'https://resend.com/legal/privacy-policy' },
                  { name: 'GoDaddy Inc.', location: 'USA', purpose: 'Domain-Verwaltung', link: 'https://www.godaddy.com/legal/agreements/privacy-policy' },
                  { name: 'Calendly LLC', location: 'USA', purpose: 'Terminbuchung und -verwaltung', link: 'https://calendly.com/legal/privacy-notice' },
                ].map((provider, i) => (
                  <div key={i} className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                    <p className="font-medium text-neutral-900">{provider.name}</p>
                    <p className="text-sm text-neutral-500">Standort: {provider.location} · Zweck: {provider.purpose}</p>
                    <a href={provider.link} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 underline hover:no-underline">
                      Datenschutzerklärung
                    </a>
                  </div>
                ))}
              </div>
              <p className="mt-4">
                Bei der Übermittlung in die USA stützen wir uns auf Standardvertragsklauseln (SCC) gemäss
                Art. 46 DSGVO sowie das EU-U.S. Data Privacy Framework.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-xl font-semibold text-neutral-900 mb-3">7. Cookies und Tracking</h2>
              <p>
                Unsere Website verwendet Cookies und ähnliche Technologien. Sie können Ihre Cookie-Einstellungen
                jederzeit über den Cookie-Banner auf unserer Website anpassen. Folgende Kategorien werden eingesetzt:
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li><strong>Notwendige Cookies:</strong> Für die Grundfunktion der Website erforderlich</li>
                <li><strong>Analyse-Cookies:</strong> Google Analytics und Vercel Analytics zur Nutzungsanalyse (nur mit Einwilligung)</li>
                <li><strong>Marketing-Cookies:</strong> Nur mit ausdrücklicher Einwilligung</li>
              </ul>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-xl font-semibold text-neutral-900 mb-3">8. Ihre Rechte</h2>
              <p>Sie haben folgende Rechte bezüglich Ihrer Personendaten:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li><strong>Auskunftsrecht:</strong> Information über die über Sie gespeicherten Daten</li>
                <li><strong>Berichtigungsrecht:</strong> Korrektur unrichtiger Daten</li>
                <li><strong>Löschungsrecht:</strong> Löschung Ihrer Daten ("Recht auf Vergessenwerden")</li>
                <li><strong>Einschränkungsrecht:</strong> Einschränkung der Datenbearbeitung</li>
                <li><strong>Datenübertragbarkeit:</strong> Erhalt Ihrer Daten in einem gängigen Format</li>
                <li><strong>Widerspruchsrecht:</strong> Widerspruch gegen die Datenbearbeitung</li>
                <li><strong>Widerrufsrecht:</strong> Widerruf einer erteilten Einwilligung jederzeit</li>
              </ul>
              <p className="mt-3">
                Zur Ausübung Ihrer Rechte wenden Sie sich an:{' '}
                <a href="mailto:schlaepfer.demian@gmail.com" className="underline hover:no-underline">
                  schlaepfer.demian@gmail.com
                </a>
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="text-xl font-semibold text-neutral-900 mb-3">9. Beschwerderecht</h2>
              <p>
                Sie haben das Recht, eine Beschwerde bei der zuständigen Datenschutzbehörde einzureichen.
                In der Schweiz ist dies der Eidgenössische Datenschutz- und Öffentlichkeitsbeauftragte (EDÖB),
                in Deutschland die zuständige Landesdatenschutzbehörde.
              </p>
            </div>

            {/* 10 */}
            <div>
              <h2 className="text-xl font-semibold text-neutral-900 mb-3">10. Datensicherheit</h2>
              <p>
                Wir setzen technische und organisatorische Massnahmen ein, um Ihre Daten vor unbefugtem
                Zugriff, Verlust oder Missbrauch zu schützen. Die Übertragung erfolgt verschlüsselt via SSL/TLS.
              </p>
            </div>

            {/* 11 */}
            <div>
              <h2 className="text-xl font-semibold text-neutral-900 mb-3">11. Änderungen dieser Datenschutzerklärung</h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen. Die aktuelle Version
                ist stets auf dieser Seite abrufbar.
              </p>
            </div>

          </div>

          <div className="mt-10 text-sm text-neutral-500">
            <Link to="/impressum" className="underline hover:text-neutral-900">
              Impressum ansehen
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;