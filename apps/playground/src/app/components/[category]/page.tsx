import { notFound } from "next/navigation";
import { registry } from "../../../registry";
import { ComponentCard } from "../../../components/ComponentCard";

// Para Next.js Static Export (output: 'export')
export function generateStaticParams() {
  return registry.map((category) => ({
    category: category.slug,
  }));
}

export default async function CategoryPage(props: { params: Promise<{ category: string }> }) {
  const params = await props.params;
  const category = registry.find((c) => c.slug === params.category);

  if (!category) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-12 py-12 md:py-20">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-gray-900 dark:text-white">
          {category.name}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {category.description}
        </p>
      </div>

      <div className="space-y-16">
        {category.components.map((component, idx) => (
          <div key={idx} className="scroll-mt-24">
            <ComponentCard component={component} />
          </div>
        ))}
      </div>
    </div>
  );
}
