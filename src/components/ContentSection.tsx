import { TrendingUp } from "lucide-react";

const getColorClass = (color: string) => {
  const colors: Record<string, string> = {
    green: "text-green-400",
    blue: "text-blue-400",
    purple: "text-purple-400",
    red: "text-red-400"
  };
  return colors[color] || "text-gray-400";
};

const ContentSection = ({ section }: { section: any }) => {
  const IconComponent = section.icon;
  return (
    <section className="bg-gray-800 border border-gray-700 rounded-xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-purple-600 bg-opacity-20 rounded-lg">
          <IconComponent className="w-6 h-6 text-purple-400" />
        </div>
        <h2 className="text-2xl font-bold text-white">{section.title}</h2>
      </div>
      {section.subtitle && (
        <h3 className="text-lg font-semibold text-purple-400 mb-4">
          {section.subtitle}
        </h3>
      )}
      <p className="text-gray-300 leading-relaxed mb-6">{section.content}</p>
      {section.stats && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {section.stats.map((stat: any, index: number) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg p-6 text-center"
            >
              <div className={`text-2xl font-bold ${getColorClass(stat.color)}`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      )}
      {section.link && (
        <a
          href={section.link.href}
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
        >
          {section.link.text}
          <TrendingUp className="w-4 h-4" />
        </a>
      )}
    </section>
  );
};

export default ContentSection;
