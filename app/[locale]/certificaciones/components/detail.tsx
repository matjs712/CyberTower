export default function CertificacionDetail({
  cert,
}: {
  cert: {
    title: string;
    description: string;
    content: string;
  };
}) {
  return (
    <div className="space-y-4 max-w-5xl mx-auto mt-4">
      <h1 className="text-3xl font-bold">{cert.title}</h1>
      <p className="text-neutral-100">{cert.description}</p>
      <div
        className="prose max-w-none mt-6"
        dangerouslySetInnerHTML={{ __html: cert.content }}
      />
    </div>
  );
}
