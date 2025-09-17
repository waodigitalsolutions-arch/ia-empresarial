import { CheckCircle, X, AlertTriangle, Target, Timer } from "lucide-react";

type Item = { title: string; points: string[]; icon: JSX.Element };

const antesCol: Item[] = [
  {
    icon: (
      <div className="p-3 rounded-xl bg-red-100 text-red-600">
        <AlertTriangle className="h-6 w-6" />
      </div>
    ),
    title: "Uso improvisado de IA",
    points: [
      "Herramientas sin estrategia",
      "Datos corporativos en riesgo",
      "Pérdida de tiempo y recursos",
      "Resultados inconsistentes",
    ],
  },
  {
    icon: (
      <div className="p-3 rounded-xl bg-red-100 text-red-600">
        <Timer className="h-6 w-6" />
      </div>
    ),
    title: "Adopción lenta y costosa",
    points: [
      "Meses de prueba y error",
      "Capacitación desordenada",
      "Resistencia del equipo",
      "Inversión sin retorno",
    ],
  },
];

const ahoraCol: Item[] = [
  {
    icon: (
      <div className="p-3 rounded-xl bg-emerald-100 text-emerald-600">
        <Target className="h-6 w-6" />
      </div>
    ),
    title: "IA estratégica y segura",
    points: [
      "Implementación planificada",
      "Políticas de privacidad claras",
      "ROI medible y sustancial",
      "Procesos optimizados",
    ],
  },
  {
    icon: (
      <div className="p-3 rounded-xl bg-emerald-100 text-emerald-600">
        <CheckCircle className="h-6 w-6" />
      </div>
    ),
    title: "Transformación acelerada",
    points: [
      "Resultados en 30 días",
      "Entrenamiento estructurado",
      "Equipo comprometido",
      "ROI desde el primer mes",
    ],
  },
];

const BulletNeg = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3">
    <X className="h-4 w-4 mt-1 text-red-500 flex-shrink-0" />
    <span className="text-foreground/80">{children}</span>
  </li>
);

const BulletPos = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3">
    <CheckCircle className="h-4 w-4 mt-1 text-emerald-600 flex-shrink-0" />
    <span className="text-foreground/80">{children}</span>
  </li>
);

const Card = ({ item, tone }: { item: Item; tone: "neg" | "pos" }) => {
  const styles =
    tone === "neg"
      ? "border-red-200 bg-red-50"
      : "border-emerald-200 bg-emerald-50";
  const titleColor = tone === "neg" ? "text-red-600" : "text-emerald-700";
  const Bullet = tone === "neg" ? BulletNeg : BulletPos;

  return (
    <div className={`rounded-2xl border ${styles} p-6 md:p-7`}>
      <div className="flex items-center gap-3 mb-4">
        {item.icon}
        <h3 className={`text-xl font-semibold ${titleColor}`}>{item.title}</h3>
      </div>
      <ul className="space-y-3">
        {item.points.map((p, i) => (
          <Bullet key={i}>{p}</Bullet>
        ))}
      </ul>
    </div>
  );
};

const ComparisonSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezados de columnas centrados */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mb-6 text-center">
          <div>
            <h2 className="text-3xl font-bold text-red-500">Antes</h2>
            <p className="text-muted-foreground mt-2">
              Así trabajan la mayoría de empresas
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-emerald-600">Ahora</h2>
            <p className="text-muted-foreground mt-2">
              Así trabajas con nuestra metodología
            </p>
          </div>
        </div>

        {/* Grid 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <div className="space-y-8">
            {antesCol.map((item, i) => (
              <Card key={`a-${i}`} item={item} tone="neg" />
            ))}
          </div>
          <div className="space-y-8">
            {ahoraCol.map((item, i) => (
              <Card key={`b-${i}`} item={item} tone="pos" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;


