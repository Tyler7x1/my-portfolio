export default function VideoBackground() {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none" aria-hidden="true">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center"
            >
                <source src="/BG.webm" type="video/webm" />
                <source src="/BG.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black/50" />
        </div>
    );
}
