import '@/app/ui/global.css';

export default function Paper() {
    return (
      <div>
        {/* <h1>View PDF</h1> */}
        <iframe
          src="/papers/AMOS_Uchida_240830.pdf" // Update this with the path to your PDF
          style={{ width: '100%', height: '850px' }}
        />
      </div>
    );
  }