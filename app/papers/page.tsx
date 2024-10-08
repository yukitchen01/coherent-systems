import '@/app/ui/global.css';

export default function Paper() {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'auto' }}>
      <iframe
        src="/papers/AMOS_Uchida_240830.pdf"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
        }}
        title="PDF Viewer"
      />
    </div>
  );
}
