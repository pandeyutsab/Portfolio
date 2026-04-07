import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// 👉 Replace these with your actual hosted image/video URLs after upload (GitHub, Cloudinary, etc.)
const projectMedia = {
  atm: ["/atm1.jpg","/atm2.jpg","/atm3.jpg"],
  fusion: ["/fusion1.jpg","/fusion2.jpg"],
  sparki: ["/sparki1.jpg","/sparki2.jpg"],
  research: ["/poster1.jpg","/poster2.jpg"],
  videos: ["/vid1.mp4","/vid2.mp4","/vid3.mp4"]
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold">Utsab Pandey</h1>
          <p className="text-lg text-gray-600 mt-2">
            Mechanical Engineering Student | Researcher | Product & Manufacturing Focus
          </p>
          <p className="text-sm text-gray-500 mt-2">
            GPA: 4.0/4.0 • Texas State University • Seeking Summer 2026 Internship
          </p>
        </motion.div>

        {/* Projects with Images */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Featured Work</h2>
          <div className="grid gap-6">

            {/* ATM Project */}
            <Card className="rounded-2xl shadow">
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold">ATM Accessibility Device</h3>
                <p className="text-gray-600 mt-2">
                  Designed and built a mechanical interface to improve ATM usability for disabled users using linkages, PVC structures, and spring-loaded actuation.
                </p>
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {projectMedia.atm.map((img, i) => (
                    <img key={i} src={img} className="rounded-lg" />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Fusion Splicing */}
            <Card className="rounded-2xl shadow">
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold">Optical Fiber Fusion Splicing</h3>
                <p className="text-gray-600 mt-2">
                  Performed precision fiber alignment and fusion splicing with low-loss optimization (~0.01 dB), supporting nanoscale sensing systems.
                </p>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {projectMedia.fusion.map((img, i) => (
                    <img key={i} src={img} className="rounded-lg" />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Sparki Robot */}
            <Card className="rounded-2xl shadow">
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold">Sparki Robot + Egg Mechanism</h3>
                <p className="text-gray-600 mt-2">
                  Designed a geometric mechanism to reorient an egg from horizontal to vertical using passive geometry. Integrated with sensors, Arduino, and motion control.
                </p>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {projectMedia.sparki.map((img, i) => (
                    <img key={i} src={img} className="rounded-lg" />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Research Poster */}
            <Card className="rounded-2xl shadow">
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold">AFM Research Presentation</h3>
                <p className="text-gray-600 mt-2">
                  Presented research on Ag-coated optical fibers for parametric amplification and noise squeezing at TXST STEM Conference.
                </p>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {projectMedia.research.map((img, i) => (
                    <img key={i} src={img} className="rounded-lg" />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Videos */}
            <Card className="rounded-2xl shadow">
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold">Demo Videos</h3>
                <div className="grid grid-cols-1 gap-4 mt-4">
                  {projectMedia.videos.map((vid, i) => (
                    <video key={i} controls className="rounded-lg">
                      <source src={vid} type="video/mp4" />
                    </video>
                  ))}
                </div>
              </CardContent>
            </Card>

          </div>
        </div>

        {/* Contact */}
        <Card className="rounded-2xl shadow">
          <CardContent className="p-6 text-center">
            <h2 className="text-2xl font-semibold mb-2">Contact</h2>
            <p className="text-gray-600 mb-2">📞 +1 (737) 213-0049</p>
            <p className="text-gray-600 mb-2">📧 pandeyutsab554@gmail.com</p>
            <p className="text-gray-600 mb-4">🔗 linkedin.com/in/utsab-pandey-500515246</p>
            <Button>Download Resume</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
