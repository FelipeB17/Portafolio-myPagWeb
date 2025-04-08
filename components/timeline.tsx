"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Briefcase, GraduationCap } from "lucide-react"

export default function Timeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const timelineItems = [
    {
      id: 1,
      title: "Estudiante de Ingeniería de Sistemas",
      company: "Universidad Francisco de Paula Santander",
      location: "Cúcuta, Colombia",
      period: "2022 - Presente",
      description:
        "Actualmente cursando la carrera de Ingeniería de Sistemas, aprendiendo sobre desarrollo web, bases de datos, programación y más.",
      type: "education",
    },
    {
      id: 2,
      title: "Bachiller",
      company: "Colegio Madre Carmen",
      location: "Cúcuta, Colombia",
      period: "2021",
      description:
        "Graduado como bachiller, donde desarrollé habilidades fundamentales y descubrí mi pasión por la tecnología y la informática.",
      type: "education",
    },
  ]

  return (
    <section id="timeline" className="py-20 md:py-32 relative overflow-hidden bg-white dark:bg-slate-950">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-200 dark:bg-blue-900 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-200 dark:bg-indigo-900 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
          className="text-center mb-16"
        >
          <motion.div variants={item} className="inline-block mb-3">
            <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
              Trayectoria
            </span>
          </motion.div>
          <motion.h2 variants={item} className="text-3xl md:text-5xl font-bold mb-4">
            Mi <span className="text-gradient">Recorrido</span> Profesional
          </motion.h2>
          <motion.p variants={item} className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Un vistazo a mi formación académica.
          </motion.p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 via-indigo-600 to-transparent" />

          <motion.div initial="hidden" animate={inView ? "show" : "hidden"} variants={container} className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={item}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="md:w-1/2 md:px-8 mb-8 md:mb-0">
                  <div
                    className={`p-6 rounded-lg shadow-lg border border-blue-100 dark:border-blue-900 bg-white dark:bg-slate-800 ${
                      index % 2 === 0 ? "md:ml-auto" : ""
                    }`}
                  >
                    <div className="flex items-center mb-3">
                      <div
                        className={`p-2 rounded-full mr-3 ${
                          item.type === "work"
                            ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                            : "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                        }`}
                      >
                        {item.type === "work" ? (
                          <Briefcase className="h-5 w-5" />
                        ) : (
                          <GraduationCap className="h-5 w-5" />
                        )}
                      </div>
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{item.period}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-1">{item.company}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{item.location}</p>
                    <p className="text-slate-600 dark:text-slate-300">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-blue-600 dark:bg-blue-500 z-10" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
