function VideoClip() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000',
        padding: '2rem',
      }}
    >
      <video
        src={`${import.meta.env.BASE_URL}clip-solo-compressed.mp4`}
        controls
        autoPlay
        playsInline
        style={{
          maxWidth: '100%',
          maxHeight: '90vh',
          width: 'auto',
          height: 'auto',
          borderRadius: '8px',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
        }}
      />
    </div>
  )
}

export default VideoClip
