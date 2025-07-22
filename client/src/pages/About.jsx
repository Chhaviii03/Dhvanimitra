import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Lightbulb, MessageCircle, FileText, Rocket, Users, Smartphone, Shield, MessageSquare, Briefcase, User, Code, Cpu, Database, Globe, Layers, Zap, Award, Clock, BarChart2, Feather } from "lucide-react";

const About = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const animationRef = useRef(null);
  const modelRef = useRef(null);

  // Luxury 3D Background Scene with Interactive Models
  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x05050a);
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    mountRef.current.appendChild(renderer.domElement);

    // Luxury lighting setup
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xf5e6c8, 1.5);
    directionalLight.position.set(5, 10, 7);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    const pointLight1 = new THREE.PointLight(0xa78bfa, 3, 50);
    pointLight1.position.set(10, 5, 10);
    pointLight1.castShadow = true;
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x86efac, 2, 50);
    pointLight2.position.set(-10, 3, 10);
    scene.add(pointLight2);

    // Add orbit controls for interactivity
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.maxPolarAngle = Math.PI * 0.5;
    controls.minPolarAngle = Math.PI * 0.25;

    // Luxury geometric shapes with advanced materials
    const createModel = () => {
      const group = new THREE.Group();
      
      // Main centerpiece
      const geometry = new THREE.IcosahedronGeometry(2, 1);
      const material = new THREE.MeshPhysicalMaterial({ 
        color: 0xf5e6c8,
        metalness: 0.9,
        roughness: 0.1,
        clearcoat: 1,
        clearcoatRoughness: 0.05,
        transmission: 0.7,
        ior: 1.5,
        envMapIntensity: 1
      });
      const mesh = new THREE.Mesh(geometry, material);
      group.add(mesh);
      
      // Floating rings
      const ringGeometry = new THREE.TorusGeometry(3, 0.05, 16, 100);
      const ringMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xa78bfa,
        metalness: 0.8,
        roughness: 0.2,
        transparent: true,
        opacity: 0.8
      });
      
      const ring1 = new THREE.Mesh(ringGeometry, ringMaterial);
      ring1.rotation.x = Math.PI / 2;
      ring1.position.y = 1.5;
      group.add(ring1);
      
      const ring2 = new THREE.Mesh(ringGeometry, ringMaterial);
      ring2.rotation.x = Math.PI / 2;
      ring2.rotation.z = Math.PI / 3;
      ring2.position.y = -1;
      group.add(ring2);
      
      // Small orbiting spheres
      const sphereGeometry = new THREE.SphereGeometry(0.3, 32, 32);
      const sphereMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x86efac,
        metalness: 0.7,
        roughness: 0.1
      });
      
      for (let i = 0; i < 6; i++) {
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.x = 4 * Math.cos((i / 6) * Math.PI * 2);
        sphere.position.z = 4 * Math.sin((i / 6) * Math.PI * 2);
        sphere.userData = { angle: (i / 6) * Math.PI * 2 };
        group.add(sphere);
      }
      
      return group;
    };

    modelRef.current = createModel();
    scene.add(modelRef.current);

    // Luxury particle system
    const particleCount = 2000;
    const particles = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);
    const colorArray = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 100;
      colorArray[i] = Math.random() * 0.5 + 0.5;
    }
    
    particles.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    
    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    camera.position.z = 15;
    sceneRef.current = { scene, camera, renderer, controls, particleSystem };

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      
      // Model animation
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.002;
        
        // Animate orbiting spheres
        modelRef.current.children.forEach((child, i) => {
          if (i > 2) { // Skip main mesh and rings
            child.userData.angle += 0.01;
            child.position.x = 4 * Math.cos(child.userData.angle);
            child.position.z = 4 * Math.sin(child.userData.angle);
            child.position.y = Math.sin(Date.now() * 0.001 + i) * 1.5;
          }
        });
      }
      
      // Particle animation
      particleSystem.rotation.y += 0.0005;
      
      // Light animation
      const time = Date.now() * 0.0005;
      pointLight1.position.x = Math.sin(time) * 12;
      pointLight1.position.z = Math.cos(time * 0.7) * 12;
      pointLight2.position.x = Math.cos(time * 1.2) * 10;
      pointLight2.position.z = Math.sin(time * 0.8) * 10;
      
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationRef.current);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Ultra-premium card variants
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  // Features with corresponding 3D model states
  const features = [
    {
      title: "Neural Matching",
      description: "Our AI analyzes 50+ compatibility factors to create perfect mentor-mentee pairs with 98% accuracy.",
      icon: Cpu,
      color: "from-[#a78bfa] to-[#7e5bef]",
      modelState: 0
    },
    {
      title: "Immersive Learning",
      description: "Holographic communication and AR whiteboards create engaging virtual learning environments.",
      icon: Globe,
      color: "from-[#f5e6c8] to-[#e2c79e]",
      modelState: 1
    },
    {
      title: "Smart Resources",
      description: "AI-curated materials adapt in real-time to your progress and learning preferences.",
      icon: Database,
      color: "from-[#86efac] to-[#4ade80]",
      modelState: 2
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden font-sans bg-gradient-to-b from-[#05050a] to-[#0f0f1a]">
      {/* Interactive 3D Canvas */}
      <div 
        ref={mountRef} 
        className="fixed top-0 left-0 w-full h-full z-0"
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen px-6 py-20 md:px-20 lg:px-32">
        {/* Luxury Header */}
        <motion.div
          className="max-w-6xl mx-auto mb-28 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.h1
            className="text-7xl md:text-8xl font-light text-white mb-8 tracking-tighter"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              delay: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5e6c8] via-[#a78bfa] to-[#86efac]">About</span> Our Vision
          </motion.h1>
          <motion.p
            className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Revolutionizing mentorship through cutting-edge technology and human-centered design
          </motion.p>
        </motion.div>

        {/* Luxury Features Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-36">
          <motion.div
            className="space-y-12"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.h2 
              className="text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-[#f5e6c8] to-[#a78bfa] mb-12"
              variants={cardVariants}
            >
              Core Features
            </motion.h2>

            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={cardVariants}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.color} rounded-3xl blur-xl opacity-0 transition-opacity duration-500 ${activeFeature === index ? 'opacity-30' : ''}`} />
                <div className={`relative p-8 rounded-xl bg-gradient-to-b from-[#1a1b26]/80 to-[#12131d]/80 border ${activeFeature === index ? 'border-[#a78bfa]/30' : 'border-[#2a2b36]'} backdrop-blur-lg transition-all duration-300`}>
                  <div className="flex items-start gap-6 mb-4">
                    <div className={`p-4 rounded-lg bg-gradient-to-br ${feature.color} shadow-lg`}>
                      <feature.icon className="text-white text-2xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-medium text-white mb-3">{feature.title}</h3>
                      <p className="text-neutral-400 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* 3D Model Viewport */}
          <div className="flex items-center justify-center relative h-[500px] lg:h-auto">
            <motion.div
              className="absolute inset-0 rounded-3xl overflow-hidden border border-[#2a2b36] backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#a78bfa]/10 to-[#f5e6c8]/10" />
            </motion.div>
          </div>
        </div>

        {/* Future Innovations */}
        <motion.div
          className="mb-40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <div className="text-center mb-20">
            <motion.h2 
              className="text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-[#f5e6c8] to-[#a78bfa] mb-6"
              variants={cardVariants}
            >
              Future Innovations
            </motion.h2>
            <motion.p
              className="text-xl text-neutral-300 max-w-3xl mx-auto"
              variants={cardVariants}
            >
              Pioneering the next generation of mentorship technology
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Neural Interface", 
                description: "Brainwave compatibility analysis",
                icon: Cpu,
                color: "bg-gradient-to-br from-[#a78bfa]/10 to-[#7e5bef]/10",
                border: "border-[#a78bfa]/20"
              },
              { 
                title: "VR Classrooms", 
                description: "Immersive 3D learning spaces",
                icon: Globe,
                color: "bg-gradient-to-br from-[#f5e6c8]/10 to-[#e2c79e]/10",
                border: "border-[#f5e6c8]/20"
              },
              { 
                title: "Blockchain Badges", 
                description: "Verified achievement system",
                icon: Award,
                color: "bg-gradient-to-br from-[#86efac]/10 to-[#4ade80]/10",
                border: "border-[#86efac]/20"
              },
              { 
                title: "Global Network", 
                description: "Worldwide opportunities",
                icon: Briefcase,
                color: "bg-gradient-to-br from-[#93c5fd]/10 to-[#3b82f6]/10",
                border: "border-[#93c5fd]/20"
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`p-8 rounded-xl ${item.color} ${item.border} border backdrop-blur-lg`}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  borderColor: "#a78bfa",
                  boxShadow: "0 20px 40px -10px rgba(167, 139, 250, 0.2)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={`w-14 h-14 rounded-lg ${item.color.split(' ')[0]} flex items-center justify-center mb-6`}>
                  <item.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-medium text-white mb-3">{item.title}</h3>
                <p className="text-neutral-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The Team */}
        <motion.div
          className="mb-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <div className="text-center mb-20">
            <motion.h2 
              className="text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-[#f5e6c8] to-[#a78bfa] mb-6"
              variants={cardVariants}
            >
              The Visionaries
            </motion.h2>
            <motion.p
              className="text-xl text-neutral-300 max-w-3xl mx-auto"
              variants={cardVariants}
            >
              The exceptional minds behind our platform
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                name: "Harshita Sharma", 
                role: "AI Architect",
                branch: "IDD (CSE)"
              },
              { 
                name: "Jay Kumar", 
                role: "3D Designer",
                branch: "CSE"
              },
              { 
                name: "Chhavi Bhatt", 
                role: "UX Visionary",
                branch: "IDD (CSE)"
              },
              { 
                name: "Anshita KapKoti", 
                role: "Neural Engineer",
                branch: "IDD (CSE)"
              },
            ].map((dev, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-xl bg-gradient-to-b from-[#1a1b26] to-[#12131d] border border-[#2a2b36] backdrop-blur-lg"
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  borderColor: "#a78bfa",
                  boxShadow: "0 20px 40px -10px rgba(167, 139, 250, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#a78bfa]/20 to-[#f5e6c8]/20 border border-[#a78bfa]/10 flex items-center justify-center mx-auto mb-6">
                  <User className="text-[#f5e6c8] text-3xl" />
                </div>
                <h3 className="text-xl font-medium text-white text-center mb-2">{dev.name}</h3>
                <p className="text-[#a78bfa] text-sm text-center mb-4">{dev.role}</p>
                <p className="text-neutral-400 text-sm text-center">B.Tech {dev.branch}</p>
                <p className="text-neutral-500 text-xs text-center mt-2">Rajiv Gandhi Institute Of Petroleum Technology</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Luxury Footer */}
        <motion.div 
          className="text-center text-neutral-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="mb-2">© {new Date().getFullYear()} Mentorship Platform</p>
          <p className="text-xs text-neutral-600">All rights reserved</p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;