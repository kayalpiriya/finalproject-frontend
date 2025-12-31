

import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Heart, Leaf, Award, Users, ArrowRight, Star, Coffee } from "lucide-react";

// --- IMPORTING IMAGES ---
// உங்கள் assets folder-ல் இந்த பெயர்களில் படங்கள் இருப்பதை உறுதி செய்து கொள்ளுங்கள்
import heroBakerImg from "../assets/instagram-bakers-1.jpg";
import storyBreadImg from "../assets/breadd.jpg";

const About = () => {
  const navigate = useNavigate();

  // --- THEME COLORS ---
  const colors = {
    accent: "rgb(214, 143, 143)", // Your specific rose
    lightPink: "#FDF4F1",         // The light brown pink background
    textDark: "#44403C",          // Warm dark gray
    textLight: "#78716C",         // Muted gray
    white: "#FFFFFF",
    cream: "#FAFAF9"
  };

  // --- ANIMATION VARIANTS ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div style={{ backgroundColor: colors.cream, minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", color: colors.textDark, overflowX: "hidden" }}>
      
      {/* --- GLOBAL STYLES FOR FONTS & MEDIA QUERIES --- */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;400;500;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
        
        /* Blob Animation */
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(10px, -20px) rotate(5deg); }
          66% { transform: translate(-10px, 10px) rotate(-5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        .animate-float { animation: float 10s infinite ease-in-out; }

        /* Responsive Grid Adjustments */
        @media (max-width: 768px) {
          .responsive-flex { flex-direction: column !important; }
          .responsive-grid { grid-template-columns: 1fr !important; }
          .hero-title { font-size: 3rem !important; }
        }
      `}</style>

      <Navbar />

      {/* 1. HERO SECTION */}
      <header style={{ position: "relative", paddingTop: "140px", paddingBottom: "80px", paddingLeft: "20px", paddingRight: "20px" }}>
        {/* Background Decor */}
        <div style={{ position: "absolute", top: "-10%", right: "-5%", width: "600px", height: "600px", backgroundColor: colors.accent, opacity: "0.1", filter: "blur(100px)", borderRadius: "50%", zIndex: 0 }}></div>
        
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            style={{ textAlign: "center" }}
          >
            <motion.span variants={fadeInUp} style={{ display: "inline-block", padding: "8px 16px", borderRadius: "50px", backgroundColor: "rgba(214, 143, 143, 0.1)", color: colors.accent, fontWeight: "bold", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "20px" }}>
              Est. 2025 • Artisanal Bakery
            </motion.span>
            
            <motion.h1 
              variants={fadeInUp} 
              className="hero-title"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "5rem", lineHeight: "1", fontWeight: "700", marginBottom: "20px" }}
            >
              We Bake <span style={{ fontStyle: "italic", color: colors.accent }}>Memories.</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} style={{ fontSize: "1.25rem", color: colors.textLight, maxWidth: "600px", margin: "0 auto 60px auto", lineHeight: "1.6" }}>
              More than just flour and sugar. We craft moments of joy, one hand-rolled croissant and artisan loaf at a time.
            </motion.p>
          </motion.div>

          {/* Hero Image Collage */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{ position: "relative", height: "500px", borderRadius: "40px", overflow: "hidden", boxShadow: "0 30px 60px rgba(0,0,0,0.1)" }}
          >
            {/* Using Imported Image Variable Here */}
            <img src={heroBakerImg} alt="Bakery Interior" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            
            {/* Floating Badge */}
            <div className="animate-float" style={{ position: "absolute", bottom: "40px", right: "40px", backgroundColor: "rgba(255,255,255,0.9)", backdropFilter: "blur(10px)", padding: "25px", borderRadius: "20px", maxWidth: "250px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
              <div style={{ display: "flex", gap: "5px", marginBottom: "5px" }}>
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill={colors.accent} stroke="none" />)}
              </div>
              <p style={{ margin: 0, fontSize: "0.95rem", fontWeight: "600", fontStyle: "italic" }}>"The attention to detail in every pastry is simply world-class."</p>
            </div>
          </motion.div>
        </div>
      </header>

      {/* 2. OUR STORY SECTION (Light Brown Pink Background) */}
      <section style={{ backgroundColor: colors.lightPink, padding: "100px 20px", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="responsive-flex" style={{ display: "flex", alignItems: "center", gap: "60px" }}>
            
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ flex: 1, position: "relative" }}
            >
              <div style={{ position: "relative", zIndex: 2, borderRadius: "30px", overflow: "hidden", boxShadow: "0 20px 40px rgba(214,143,143,0.2)" }}>
                {/* Using Imported Image Variable Here */}
                <img src={storyBreadImg} alt="Kneading Dough" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
              {/* Decorative Border Element */}
              <div style={{ position: "absolute", top: "20px", left: "-20px", width: "100%", height: "100%", border: `2px solid ${colors.accent}`, borderRadius: "30px", zIndex: 1 }}></div>
            </motion.div>

            {/* Text Side */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ flex: 1 }}
            >
              <h4 style={{ color: colors.accent, fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "15px" }}>Our Story</h4>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3.5rem", lineHeight: "1.1", marginBottom: "25px" }}>
                From a Small Kitchen <br/> to Your <span style={{ color: colors.accent }}>Heart.</span>
              </h2>
              <p style={{ fontSize: "1.1rem", color: "#666", lineHeight: "1.8", marginBottom: "20px" }}>
                It started with a simple sourdough starter and a dream in 2015. Our founder, Jane Doe, believed that bread shouldn't just be food—it should be an experience.
              </p>
              <p style={{ fontSize: "1.1rem", color: "#666", lineHeight: "1.8", marginBottom: "40px" }}>
                Today, we maintain that same philosophy. No shortcuts, no preservatives, just time-honored techniques mixed with modern creativity. Every loaf that leaves our oven is a testament to patience and passion.
              </p>
              
              <div style={{ display: "flex", gap: "40px" }}>
                <div>
                  <h3 style={{ fontSize: "2.5rem", fontFamily: "'Playfair Display', serif", margin: 0 }}>15+</h3>
                  <span style={{ fontSize: "0.9rem", color: colors.textLight }}>Years Baking</span>
                </div>
                <div>
                  <h3 style={{ fontSize: "2.5rem", fontFamily: "'Playfair Display', serif", margin: 0 }}>50k+</h3>
                  <span style={{ fontSize: "0.9rem", color: colors.textLight }}>Happy Customers</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. VALUES SECTION */}
      <section style={{ padding: "100px 20px", backgroundColor: colors.white }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", marginBottom: "15px" }}>The Secret Ingredients</h2>
            <p style={{ color: colors.textLight }}>What makes our bakery unlike any other.</p>
          </div>

          <div className="responsive-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "30px" }}>
            {[
              { icon: Leaf, title: "100% Organic", desc: "We source our grains and dairy from local certified organic farms." },
              { icon: Heart, title: "Handmade with Love", desc: "No machines can replicate the touch of a skilled artisan baker." },
              { icon: Coffee, title: "Baked Fresh Daily", desc: "We start baking at 3 AM so you get the freshest goods by sunrise." },
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                style={{ 
                  padding: "40px", 
                  borderRadius: "30px", 
                  backgroundColor: colors.cream, 
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  cursor: "default"
                }}
              >
                <div style={{ width: "70px", height: "70px", backgroundColor: colors.lightPink, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 25px auto" }}>
                  <item.icon size={30} color={colors.accent} />
                </div>
                <h3 style={{ fontSize: "1.5rem", fontFamily: "'Playfair Display', serif", marginBottom: "15px" }}>{item.title}</h3>
                <p style={{ color: colors.textLight, lineHeight: "1.6" }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MEET THE TEAM (Circular Design) */}
      <section style={{ padding: "100px 20px", backgroundColor: colors.lightPink }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", marginBottom: "60px" }}>Meet the Makers</h2>
          
          <div className="responsive-flex" style={{ display: "flex", justifyContent: "center", gap: "50px", flexWrap: "wrap" }}>
            {/* Note: These images are from Unsplash. If you have local images for team members, import them like the others above. */}
            {[
              { name: "Sarah Jenkins", role: "Head Baker", img: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
              { name: "David Rossi", role: "Pastry Chef", img: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
              { name: "Elena Miles", role: "Cake Artist", img: "https://images.unsplash.com/photo-1605493666469-34b76d0f18f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            ].map((member, index) => (
              <motion.div 
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                style={{ textAlign: "center" }}
              >
                <div style={{ width: "220px", height: "220px", borderRadius: "50%", overflow: "hidden", marginBottom: "20px", border: "5px solid white", boxShadow: "0 10px 25px rgba(0,0,0,0.05)", margin: "0 auto" }}>
                  <img src={member.img} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <h3 style={{ fontSize: "1.5rem", fontFamily: "'Playfair Display', serif", margin: "0 0 5px 0" }}>{member.name}</h3>
                <p style={{ color: colors.accent, fontWeight: "bold", textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: "1px" }}>{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section style={{ padding: "100px 20px" }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ 
            maxWidth: "1200px", 
            margin: "0 auto", 
            backgroundColor: colors.textDark, 
            borderRadius: "40px", 
            padding: "80px 40px", 
            textAlign: "center", 
            color: "white",
            position: "relative",
            overflow: "hidden"
          }}
        >
          {/* Background Blob */}
          <div style={{ position: "absolute", top: "-50%", left: "-20%", width: "600px", height: "600px", backgroundColor: colors.accent, opacity: "0.2", filter: "blur(100px)", borderRadius: "50%" }}></div>

          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3.5rem", marginBottom: "20px" }}>Craving something sweet?</h2>
            <p style={{ fontSize: "1.2rem", opacity: 0.8, marginBottom: "40px", maxWidth: "600px", margin: "0 auto 40px auto" }}>
              Our ovens are warm and the shelves are stocked. Come taste the magic we've been talking about.
            </p>
            <motion.button 
              onClick={() => navigate("/allproduct")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                backgroundColor: colors.accent, 
                color: "white", 
                border: "none", 
                padding: "18px 40px", 
                borderRadius: "50px", 
                fontSize: "1.1rem", 
                fontWeight: "bold", 
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 10px 30px rgba(214,143,143, 0.4)"
              }}
            >
              Visit the Shop <ArrowRight size={20} />
            </motion.button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default About;