import { useState } from "react";

const offers = [
  {
    emoji: "🎬",
    area: "Edición de Video",
    areaEN: "Video Editing",
    color: "#E94560",
    colorDark: "#b02e45",
    price: "Desde 149€/mes",
    priceEN: "From €149/mo",
    tagline: "Vídeos listos. Tú solo graba.",
    taglineEN: "Videos done. You just hit record.",
    es: {
      hook: "¿Grabas contenido pero se te acumula sin editar?",
      offer: "Te entrego un pack de vídeos editados cada mes, listos para publicar. Cortes limpios, subtítulos, música y formato adaptado a cada red.",
      included: [
        "Hasta 8 vídeos editados al mes",
        "Subtítulos incluidos",
        "Formato para Reels, TikTok y YouTube Shorts",
        "1 ronda de revisiones por vídeo",
        "Entrega en 48–72h",
      ],
      cta: "Escríbeme y te cuento cómo funciona →",
      dm: `Hola [Nombre] 👋\n\nVi tu perfil y me di cuenta de que publicas contenido en vídeo.\n\nTengo un servicio de edición mensual pensado para creadores como tú: tú grabas, yo edito y te lo entrego listo para publicar en 48h.\n\nPack desde 149€/mes. ¿Te interesa que te cuente cómo funciona?`,
      email: {
        subject: "Edición de vídeo mensual — tú solo graba",
        body: `Hola [Nombre],\n\nSé que crear contenido en vídeo lleva tiempo y la edición suele ser el cuello de botella.\n\nTengo un pack mensual de edición pensado para que tú solo te preocupes de grabar:\n\n✅ Hasta 8 vídeos editados al mes\n✅ Subtítulos, música y formato para cada red\n✅ Entrega en 48–72h por vídeo\n✅ 1 ronda de revisiones incluida\n\nDesde 149€/mes.\n\n¿Tienes 15 minutos esta semana para contarte cómo funciona?\n\nUn saludo,\n[Tu nombre]`,
      },
      personal: {
        name: "Alejandro",
        context: "Freelancer de diseño gráfico, publica tutoriales en Instagram pero su feed lleva semanas parado",
        dm: `Ey Alejandro 👋\n\nLlevo un rato mirando tu perfil — tus tutoriales de diseño son muy buenos, en serio.\n\nPero vi que el último Reel lo publicaste hace casi tres semanas. Apuesto a que el problema no es que no tengas ideas, sino que editar se come el tiempo que no tienes.\n\nYo me encargo de eso. Tú grabas en crudo, yo edito, subtitulo y te lo entrego listo para subir en menos de 48h.\n\nPack desde 149€/mes. ¿Quieres que te mande un ejemplo de cómo trabajo?`,
        email: {
          subject: "Alejandro, vi tus tutoriales — tengo una idea",
          body: `Ey Alejandro,\n\nTe escribo porque llevo un rato viendo tu contenido de diseño y me parece muy bueno de verdad. Tienes un estilo propio que no es fácil de encontrar.\n\nPero noté que llevas casi un mes sin publicar nada. Y lo entiendo perfectamente — crear el contenido ya lleva tiempo, editarlo encima es otro trabajo completo.\n\nA eso me dedico yo: cojo tus vídeos en crudo y te los devuelvo editados, subtitulados y listos para subir en menos de 48h. Tú solo grabas.\n\nTrabajo con freelancers y creadores que quieren mantener presencia constante sin que la edición les robe el día.\n\nPack desde 149€/mes. Si quieres te mando un ejemplo de un vídeo editado para que veas el nivel.\n\n¿Te parece?\n\n[Tu nombre]`,
        },
      },
    },
    en: {
      hook: "Filming content but never finding time to edit?",
      offer: "I deliver a monthly pack of edited videos, ready to post. Clean cuts, captions, music and format adapted to each platform.",
      included: [
        "Up to 8 edited videos per month",
        "Captions included",
        "Format for Reels, TikTok and YouTube Shorts",
        "1 revision round per video",
        "Delivery in 48–72h",
      ],
      cta: "Message me and I'll explain how it works →",
      dm: `Hey [Name] 👋\n\nI checked out your profile and noticed you post video content.\n\nI run a monthly editing service for creators like you: you record, I edit and deliver it ready to post within 48h.\n\nPacks from €149/mo. Want me to walk you through how it works?`,
      email: {
        subject: "Monthly video editing — you just hit record",
        body: `Hi [Name],\n\nI know creating video content takes time — and editing is usually the bottleneck.\n\nI offer a monthly editing pack so you only focus on recording:\n\n✅ Up to 8 edited videos per month\n✅ Captions, music and platform-specific formats\n✅ Delivery in 48–72h per video\n✅ 1 revision round included\n\nFrom €149/month.\n\nGot 15 minutes this week to chat about how it works?\n\nBest,\n[Your name]`,
      },
      personal: {
        name: "Alex",
        context: "Freelance graphic designer, posts tutorials on Instagram but hasn't uploaded in weeks",
        dm: `Hey Alex 👋\n\nBeen scrolling through your profile — your design tutorials are genuinely great.\n\nBut I noticed your last Reel was almost three weeks ago. I'm guessing it's not a lack of ideas — editing just swallows time you don't have.\n\nThat's exactly what I handle. You record raw, I edit, caption and hand it back ready to post in under 48h.\n\nPacks from €149/mo. Want me to send you an example of how I work?`,
        email: {
          subject: "Alex, saw your tutorials — I have an idea",
          body: `Hey Alex,\n\nReached out because I've been watching your design content and it's honestly really good. You have a distinctive style that's hard to find.\n\nBut I noticed you haven't posted in almost a month. Totally get it — creating the content already takes time, then editing on top of that is a whole other job.\n\nThat's what I do: I take your raw footage and hand it back edited, captioned and ready to upload in under 48h. You just record.\n\nI work with freelancers and creators who want consistent output without editing eating their day.\n\nPacks from €149/month. Happy to send you an edited video sample so you can see the quality.\n\nSound good?\n\n[Your name]`,
        },
      },
    },
  },
  {
    emoji: "🖼️",
    area: "Cuadros Digitales (Etsy)",
    areaEN: "Digital Art (Etsy)",
    color: "#F5A623",
    colorDark: "#c07d0d",
    price: "Desde 12€/pieza",
    priceEN: "From €12/piece",
    tagline: "Arte que se vende mientras duermes.",
    taglineEN: "Art that sells while you sleep.",
    es: {
      hook: "¿Buscas decoración digital única para tu hogar u oficina?",
      offer: "Cuadros digitales de descarga inmediata, listos para imprimir en cualquier tamaño. Diseños únicos que no encontrarás en ningún otro sitio.",
      included: [
        "Archivo de alta resolución (300 DPI)",
        "Descarga inmediata tras el pago",
        "Compatible con imprentas locales y online",
        "Varios formatos incluidos (A3, A2, 50x70…)",
        "Sin marcas de agua",
      ],
      cta: "Visita la tienda y descarga hoy →",
      dm: `Hola [Nombre] 👋\n\nVi que te gusta la decoración minimalista en tu perfil.\n\nTengo una tienda en Etsy con cuadros digitales de descarga inmediata desde 12€. Los imprimes donde quieras, en el tamaño que necesites.\n\n¿Quieres que te pase el enlace?`,
      email: {
        subject: "Cuadros digitales únicos — descarga y a imprimir",
        body: `Hola [Nombre],\n\nSi buscas renovar la decoración sin gastar una fortuna, tengo algo que te puede interesar.\n\nVendo cuadros digitales de descarga inmediata en Etsy:\n\n🖼 Alta resolución lista para imprimir\n🖼 Varios formatos en cada compra\n🖼 Desde 12€, descarga en segundos\n🖼 Diseños únicos, sin stock físico\n\n¿Te paso el enlace a la tienda?\n\n[Tu nombre]`,
      },
      personal: {
        name: "Laura",
        context: "Freelancer de copywriting, comparte fotos de su espacio de trabajo en Instagram, estética muy cuidada",
        dm: `Ey Laura 👋\n\nTe sigo desde hace un tiempo y me encanta cómo tienes montado tu espacio de trabajo — se nota que cuidas mucho el ambiente donde creas.\n\nTengo una tienda en Etsy con cuadros digitales de descarga inmediata, estética minimalista y nórdica, justo lo que combinaría con lo que muestras. Desde 12€, lo descargas y lo llevas a imprimir donde quieras.\n\n¿Te mando el enlace para que le eches un ojo?`,
        email: {
          subject: "Laura, esto combinaría perfecto con tu espacio",
          body: `Ey Laura,\n\nTe escribo porque llevo un tiempo siguiendo tu contenido y me fijé en lo mucho que cuidas la estética de tu espacio de trabajo. Esas fotos de tu mesa con la luz natural son una pasada.\n\nTengo una tienda en Etsy con cuadros digitales de descarga inmediata — minimalistas, con tipografía limpia, exactamente el tipo de pieza que quedaría bien en un espacio como el tuyo.\n\nDesde 12€. Los descargas, los llevas a imprimir donde quieras y listo. Sin envíos, sin esperas.\n\n¿Quieres que te pase el enlace para verlos?\n\n[Tu nombre]`,
        },
      },
    },
    en: {
      hook: "Looking for unique digital art for your home or office?",
      offer: "Instant-download digital prints, ready to print in any size. One-of-a-kind designs you won't find anywhere else.",
      included: [
        "High-resolution file (300 DPI)",
        "Instant download after purchase",
        "Compatible with local and online print shops",
        "Multiple formats included (A3, A2, 50x70…)",
        "No watermarks",
      ],
      cta: "Visit the shop and download today →",
      dm: `Hey [Name] 👋\n\nI noticed you're into minimalist home decor on your profile.\n\nI have an Etsy shop with instant-download digital prints from €12. Print them anywhere, in whatever size you need.\n\nWant me to send you the link?`,
      email: {
        subject: "Unique digital prints — download and print anywhere",
        body: `Hi [Name],\n\nIf you're looking to refresh your space without breaking the bank, I think you'll love this.\n\nI sell instant-download digital art prints on Etsy:\n\n🖼 High resolution, print-ready\n🖼 Multiple formats per purchase\n🖼 From €12, downloaded in seconds\n🖼 Original designs, no physical inventory\n\nWant me to send you the shop link?\n\n[Your name]`,
      },
      personal: {
        name: "Laura",
        context: "Freelance copywriter, shares workspace photos on Instagram, very aesthetic feed",
        dm: `Hey Laura 👋\n\nBeen following you for a while — I love how you've set up your workspace. You can tell you really think about the vibe you create in.\n\nI have an Etsy shop with instant-download digital prints, minimal and clean aesthetic, exactly the kind of thing that would work in a space like yours. From €12, download and print wherever you like.\n\nWant me to send you the link to have a look?`,
        email: {
          subject: "Laura, this would fit your workspace perfectly",
          body: `Hey Laura,\n\nReached out because I've been following your content for a while and I love how much attention you put into your workspace aesthetic. Those desk shots with the natural light are stunning.\n\nI have an Etsy shop with instant-download digital prints — minimal, clean typography, exactly the kind of piece that would work in a space like yours.\n\nFrom €12. Download, take it to any print shop and done. No shipping, no waiting.\n\nWant me to send you the link to browse?\n\n[Your name]`,
        },
      },
    },
  },
  {
    emoji: "🌐",
    area: "Páginas Web con IA",
    areaEN: "AI-Built Websites",
    color: "#4CAF50",
    colorDark: "#2e7d32",
    price: "Desde 299€",
    priceEN: "From €299",
    tagline: "Web profesional en 7 días.",
    taglineEN: "Professional website in 7 days.",
    es: {
      hook: "¿Tu negocio no tiene web o la que tienes da vergüenza?",
      offer: "Te creo una web profesional en menos de una semana usando IA. Limpia, rápida, adaptada al móvil y lista para captar clientes desde el día 1.",
      included: [
        "Web de hasta 5 secciones",
        "Diseño adaptado a tu marca",
        "Formulario de contacto funcional",
        "Optimizada para móvil y carga rápida",
        "Entrega en 5–7 días laborables",
      ],
      cta: "Cuéntame tu proyecto y te doy precio exacto →",
      dm: `Hola [Nombre] 👋\n\nVi que tu negocio no tiene web (o que la actual podría mejorarse bastante).\n\nCroo webs profesionales con IA en menos de una semana, desde 299€. Limpias, rápidas y que convierten visitas en clientes.\n\n¿Te interesa que hablemos 15 minutos sobre lo que necesitas?`,
      email: {
        subject: "Web profesional en 7 días — desde 299€",
        body: `Hola [Nombre],\n\nSi tu negocio aún no tiene web o la actual no está convirtiendo visitas en clientes, puedo ayudarte.\n\nCroo páginas web profesionales con IA en 5–7 días:\n\n✅ Hasta 5 secciones diseñadas a tu medida\n✅ Adaptada a móvil y optimizada para cargar rápido\n✅ Formulario de contacto y llamadas a la acción claras\n✅ Entrega garantizada en una semana\n\nDesde 299€ pago único.\n\n¿Tienes 15 minutos para contarme tu proyecto?\n\n[Tu nombre]`,
      },
      personal: {
        name: "Marcos",
        context: "Fotógrafo freelancer, tiene Instagram con buen portfolio pero sin página web propia",
        dm: `Ey Marcos 👋\n\nVi tu trabajo de fotografía y es muy bueno — tienes un ojo brutal para la luz.\n\nPero no encontré ninguna web donde ver tu portfolio completo o contactarte de forma profesional. Todo pasa por Instagram, y eso te limita bastante cuando un cliente grande quiere contratarte.\n\nCreo webs para freelancers como tú en menos de una semana, desde 299€. Portfolio, formulario de contacto, adaptada a móvil, todo.\n\n¿Te interesa que hablemos un momento?`,
        email: {
          subject: "Marcos, tu trabajo merece una web propia",
          body: `Ey Marcos,\n\nTe escribo porque vi tu trabajo de fotografía en Instagram y me pareció realmente bueno. Tienes un estilo muy definido.\n\nPero busqué tu web para ver más portfolio y no encontré nada. Y eso es un problema real: cuando un cliente con presupuesto quiere contratarte, lo primero que hace es buscar tu web. Si no la encuentra, muchas veces se va a otra persona.\n\nCreo webs para fotógrafos y freelancers en 5–7 días:\n\n✅ Portfolio visual con tus mejores trabajos\n✅ Página de servicios y tarifas\n✅ Formulario de contacto y presupuesto\n✅ Adaptada a móvil, carga rápida\n\nDesde 299€, pago único, sin mensualidades.\n\n¿Tienes 15 minutos esta semana para contarme qué necesitas?\n\n[Tu nombre]`,
        },
      },
    },
    en: {
      hook: "Does your business have no website — or one that's costing you clients?",
      offer: "I build a professional website in under a week using AI. Clean, fast, mobile-ready and built to convert visitors from day one.",
      included: [
        "Up to 5-section website",
        "Design tailored to your brand",
        "Functional contact form",
        "Mobile-optimised and fast-loading",
        "Delivered in 5–7 working days",
      ],
      cta: "Tell me about your project and I'll give you an exact quote →",
      dm: `Hey [Name] 👋\n\nI noticed your business doesn't have a website (or the current one could use some work).\n\nI build professional AI-powered websites in under a week, from €299. Clean, fast and built to turn visitors into clients.\n\nWant to jump on a quick 15-min call to talk through what you need?`,
      email: {
        subject: "Professional website in 7 days — from €299",
        body: `Hi [Name],\n\nIf your business doesn't have a website yet — or the current one isn't converting — I can help.\n\nI build professional websites using AI in 5–7 days:\n\n✅ Up to 5 custom-designed sections\n✅ Mobile-optimised and fast-loading\n✅ Contact form and clear calls to action\n✅ Guaranteed delivery in one week\n\nFrom €299 one-time payment.\n\nGot 15 minutes to tell me about your project?\n\n[Your name]`,
      },
      personal: {
        name: "Marcus",
        context: "Freelance photographer, great Instagram portfolio but no website",
        dm: `Hey Marcus 👋\n\nSaw your photography work — it's genuinely great. You have a real eye for light.\n\nBut I couldn't find a website to see your full portfolio or contact you properly. Everything goes through Instagram, which limits you a lot when a bigger client wants to hire you.\n\nI build websites for freelancers like you in under a week, from €299. Portfolio, contact form, mobile-ready, everything.\n\nWant to have a quick chat about it?`,
        email: {
          subject: "Marcus, your work deserves its own website",
          body: `Hey Marcus,\n\nReached out because I saw your photography on Instagram and it's really impressive. You have a very distinctive style.\n\nBut I looked for your website to see more of your work and couldn't find one. That's a real issue: when a client with a serious budget wants to hire you, the first thing they do is Google your website. If there isn't one, they often move on.\n\nI build websites for photographers and freelancers in 5–7 days:\n\n✅ Visual portfolio with your best work\n✅ Services and pricing page\n✅ Contact and quote form\n✅ Mobile-optimised, fast-loading\n\nFrom €299, one-time payment, no monthly fees.\n\nGot 15 minutes this week to tell me what you need?\n\n[Your name]`,
        },
      },
    },
  },
  {
    emoji: "📣",
    area: "Facebook Ads",
    areaEN: "Facebook Ads",
    color: "#2196F3",
    colorDark: "#1565c0",
    price: "Desde 299€/mes",
    priceEN: "From €299/mo",
    tagline: "Anuncios que venden. No que solo se ven.",
    taglineEN: "Ads that sell. Not just get seen.",
    es: {
      hook: "¿Inviertes en Facebook Ads y no ves resultados claros?",
      offer: "Gestiono tus campañas de Meta Ads de principio a fin: estrategia, creatividades, segmentación y optimización semanal. Con reporte mensual incluido.",
      included: [
        "Estrategia y configuración inicial",
        "Hasta 3 campañas activas simultáneas",
        "Optimización y ajustes semanales",
        "Reporte mensual de resultados",
        "Comunicación directa sin intermediarios",
      ],
      cta: "Cuéntame cuánto inviertes y te digo qué puedo hacer →",
      dm: `Hola [Nombre] 👋\n\nGestiono campañas de Meta Ads para negocios como el tuyo.\n\nMuchos de mis clientes llegaron con anuncios que gastaban presupuesto sin resultados claros. Lo que hago es auditar, reestructurar y optimizar hasta que los números tengan sentido.\n\nGestión desde 299€/mes. ¿Tienes 15 minutos para que revise tu cuenta?`,
      email: {
        subject: "Tus Facebook Ads podrían estar rindiendo mucho más",
        body: `Hola [Nombre],\n\nSi estás invirtiendo en Meta Ads pero los resultados no son los que esperabas, hay margen de mejora.\n\nGestiono campañas de principio a fin para negocios como el tuyo:\n\n📊 Estrategia y segmentación a medida\n📊 Hasta 3 campañas activas simultáneas\n📊 Optimización semanal de pujas y creatividades\n📊 Reporte mensual con resultados claros\n\nDesde 299€/mes (sin compromiso de permanencia).\n\n¿Hablamos 15 minutos y revisamos tu cuenta?\n\n[Tu nombre]`,
      },
      personal: {
        name: "Sara",
        context: "Emprendedora con tienda online de ropa, ha probado Facebook Ads pero dice que no le funcionan",
        dm: `Ey Sara 👋\n\nVi en tu perfil que tienes tienda online y que has estado probando anuncios en Meta.\n\nMuchos emprendedores me dicen lo mismo: "lo probé y no me funcionó". El problema casi siempre no es el producto, es la estructura de la campaña o la segmentación.\n\nGestiono Meta Ads para tiendas como la tuya desde 299€/mes. Si quieres, me cuentas qué has probado y te digo en dos minutos si tiene solución.\n\n¿Te animas?`,
        email: {
          subject: "Sara, ¿los Ads no te funcionaron? Hay una razón",
          body: `Ey Sara,\n\nVi que tienes tienda online y que has intentado hacer publicidad en Meta. Y me imagino que la experiencia no fue la mejor — es lo más habitual cuando se arranca sin una estructura clara.\n\nEl problema casi nunca es el producto. Es la campaña: el objetivo mal elegido, la segmentación demasiado amplia, los creativos que no paran el scroll.\n\nGestiono Meta Ads para emprendedoras con tienda online:\n\n📊 Auditoría de lo que has hecho hasta ahora (gratis)\n📊 Estrategia nueva adaptada a tu producto\n📊 Gestión completa mes a mes con reporte claro\n\nDesde 299€/mes, sin permanencia.\n\nSi quieres, cuéntame qué has probado y te digo honestamente si puedo ayudarte o no.\n\n[Tu nombre]`,
        },
      },
    },
    en: {
      hook: "Spending on Facebook Ads but not seeing real results?",
      offer: "I manage your Meta Ads campaigns end-to-end: strategy, creatives, targeting and weekly optimisation. Monthly report included.",
      included: [
        "Initial strategy and setup",
        "Up to 3 active campaigns at once",
        "Weekly optimisation and adjustments",
        "Monthly results report",
        "Direct communication, no account managers",
      ],
      cta: "Tell me your budget and I'll tell you what I can do →",
      dm: `Hey [Name] 👋\n\nI manage Meta Ads campaigns for businesses like yours.\n\nMost of my clients came to me with ads that were burning budget without clear results. I audit, restructure and optimise until the numbers make sense.\n\nManagement from €299/mo. Got 15 minutes for me to take a look at your account?`,
      email: {
        subject: "Your Facebook Ads could be performing a lot better",
        body: `Hi [Name],\n\nIf you're investing in Meta Ads but the results aren't where you want them, there's room to improve.\n\nI manage campaigns end-to-end for businesses like yours:\n\n📊 Custom strategy and targeting\n📊 Up to 3 active campaigns at once\n📊 Weekly bid and creative optimisation\n📊 Clear monthly results report\n\nFrom €299/month (no lock-in contract).\n\nWant to jump on a 15-min call and review your account?\n\n[Your name]`,
      },
      personal: {
        name: "Sara",
        context: "Entrepreneur with an online clothing store, tried Facebook Ads but says they didn't work",
        dm: `Hey Sara 👋\n\nSaw on your profile that you have an online store and you've been trying Meta ads.\n\nA lot of entrepreneurs tell me the same thing: "I tried it and it didn't work." The issue almost never is the product — it's the campaign structure or the targeting.\n\nI manage Meta Ads for stores like yours from €299/mo. If you want, tell me what you've tried and I'll tell you in two minutes whether it's fixable.\n\nWant to give it a shot?`,
        email: {
          subject: "Sara, if the Ads didn't work — there's a reason",
          body: `Hey Sara,\n\nI saw you have an online store and you've had a go at Meta advertising. I'm guessing the experience wasn't great — that's the norm when you start without a clear structure.\n\nThe problem is almost never the product. It's the campaign: wrong objective, targeting too broad, creatives that don't stop the scroll.\n\nI manage Meta Ads for online store owners:\n\n📊 Free audit of what you've tried so far\n📊 Fresh strategy tailored to your product\n📊 Full month-to-month management with a clear report\n\nFrom €299/month, no lock-in.\n\nIf you want, tell me what you've tried and I'll be straight with you about whether I can help.\n\n[Your name]`,
        },
      },
    },
  },
  {
    emoji: "📲",
    area: "Gestión de Redes Sociales",
    areaEN: "Social Media Management",
    color: "#9C27B0",
    colorDark: "#6a1b9a",
    price: "Desde 249€/mes",
    priceEN: "From €249/mo",
    tagline: "Presencia constante. Sin que te ocupe la cabeza.",
    taglineEN: "Consistent presence. Off your plate completely.",
    es: {
      hook: "¿Tu marca lleva semanas sin publicar en redes?",
      offer: "Llevo tus redes sociales de forma profesional: planificación, diseño, textos y publicación. Tú solo apruebas el contenido una vez al mes.",
      included: [
        "12–16 publicaciones al mes",
        "Diseño de piezas adaptadas a tu marca",
        "Textos y hashtags incluidos",
        "Calendario de contenido mensual",
        "1 red social incluida (+ 99€/red adicional)",
      ],
      cta: "Escríbeme y te preparo una propuesta en 24h →",
      dm: `Hola [Nombre] 👋\n\nVi que lleváis un tiempo sin actividad en vuestro Instagram.\n\nLlevo redes sociales para negocios que no tienen tiempo para gestionarlas: me encargo de todo, desde el diseño hasta la publicación. Solo necesito tu OK una vez al mes.\n\nDesde 249€/mes. ¿Te cuento cómo funciona?`,
      email: {
        subject: "Redes sociales gestionadas — tú solo apruebas",
        body: `Hola [Nombre],\n\nNoté que vuestra presencia en redes podría ser más constante.\n\nGestiono redes sociales para negocios que no tienen tiempo o equipo para hacerlo bien:\n\n📱 12–16 publicaciones al mes\n📱 Diseño adaptado a vuestra imagen\n📱 Textos y hashtags incluidos\n📱 Vosotros solo aprobáis el contenido una vez al mes\n\nDesde 249€/mes por una red social.\n\n¿Os preparo una propuesta personalizada esta semana?\n\n[Tu nombre]`,
      },
      personal: {
        name: "Carlos",
        context: "Consultor independiente de RRHH, tiene Instagram pero publica de forma irregular y con poco engagement",
        dm: `Ey Carlos 👋\n\nVi tu perfil y me gusta mucho el contenido que compartes sobre selección de talento. Tienes cosas interesantes que decir.\n\nPero vi que llevas casi un mes sin publicar y cuando lo haces es bastante irregular. Y lo entiendo — llevar las redes encima de todo lo demás agota.\n\nYo me encargo de tu Instagram de principio a fin: estrategia, diseño, textos y publicación. Tú solo apruebas el calendario una vez al mes.\n\nDesde 249€/mes. ¿Hablamos?`,
        email: {
          subject: "Carlos, tu contenido de RRHH merece más visibilidad",
          body: `Ey Carlos,\n\nTe escribo porque vi tu perfil de consultor de RRHH y me pareció que tienes mucho valor que ofrecer. El problema es que desde fuera cuesta encontrarte — la presencia en redes es irregular y eso hace que el algoritmo no te favorezca.\n\nGestiono el Instagram de consultores y freelancers que quieren posicionarse como referentes en su sector sin dedicarle horas cada semana:\n\n📱 Estrategia de contenido alineada con tu expertise\n📱 12–16 publicaciones al mes, diseñadas y escritas\n📱 Tú solo apruebas el calendario una vez al mes\n📱 Sin contratos de permanencia\n\nDesde 249€/mes.\n\n¿Tienes 20 minutos esta semana para ver juntos qué se podría hacer con tu perfil?\n\n[Tu nombre]`,
        },
      },
    },
    en: {
      hook: "Has your brand gone quiet on social media?",
      offer: "I manage your social media professionally: planning, design, copy and publishing. You just approve the content once a month.",
      included: [
        "12–16 posts per month",
        "On-brand graphic design",
        "Copy and hashtags included",
        "Monthly content calendar",
        "1 social network included (+€99 per additional)",
      ],
      cta: "Message me and I'll have a proposal ready in 24h →",
      dm: `Hey [Name] 👋\n\nI noticed your Instagram has been quiet for a while.\n\nI manage social media for businesses that don't have time to do it themselves — I handle everything from design to publishing. You just need to give the green light once a month.\n\nFrom €249/mo. Want me to walk you through how it works?`,
      email: {
        subject: "Social media managed — you just approve",
        body: `Hi [Name],\n\nI noticed your social media presence could use some consistency.\n\nI manage social accounts for businesses that don't have the time or team to do it well:\n\n📱 12–16 posts per month\n📱 On-brand graphic design\n📱 Copy and hashtags included\n📱 You just approve the content once a month\n\nFrom €249/month for one network.\n\nWant me to put together a personalised proposal this week?\n\n[Your name]`,
      },
      personal: {
        name: "Carlos",
        context: "Independent HR consultant, has Instagram but posts irregularly with low engagement",
        dm: `Hey Carlos 👋\n\nChecked out your profile — really like the content you share about talent acquisition. You have genuinely interesting things to say.\n\nBut I noticed you haven't posted in almost a month and when you do it's pretty sporadic. Totally get it — managing social on top of everything else is exhausting.\n\nI handle your Instagram end-to-end: strategy, design, copy and publishing. You just approve the calendar once a month.\n\nFrom €249/mo. Want to chat?`,
        email: {
          subject: "Carlos, your HR content deserves more reach",
          body: `Hey Carlos,\n\nReached out because I saw your HR consultant profile and I think you have a lot of value to offer. The problem is it's hard to find you from the outside — inconsistent posting means the algorithm doesn't work in your favour.\n\nI manage Instagram for consultants and freelancers who want to be seen as authorities in their field without spending hours on it every week:\n\n📱 Content strategy aligned with your expertise\n📱 12–16 posts per month, designed and written\n📱 You just approve the calendar once a month\n📱 No lock-in contracts\n\nFrom €249/month.\n\nGot 20 minutes this week to look at what we could do with your profile?\n\n[Your name]`,
        },
      },
    },
  },
  {
    emoji: "📅",
    area: "Contenido Mensual",
    areaEN: "Monthly Content",
    color: "#00BCD4",
    colorDark: "#00838f",
    price: "Desde 199€/mes",
    priceEN: "From €199/mo",
    tagline: "Contenido listo el día 1 de cada mes.",
    taglineEN: "Content ready on the 1st of every month.",
    es: {
      hook: "¿Llegas a cada mes sin saber qué publicar?",
      offer: "Te entrego un pack de contenido completo cada mes: textos, pies de foto, ideas de stories y calendario editorial. Solo tienes que publicar.",
      included: [
        "20 copies listos para publicar",
        "Calendario editorial mensual",
        "Ideas de stories y contenido efímero",
        "Adaptado a tu tono y sector",
        "Entrega el día 25 del mes anterior",
      ],
      cta: "Prueba el primer mes y decides →",
      dm: `Hola [Nombre] 👋\n\nSé que crear el texto de cada publicación lleva más tiempo del que parece.\n\nTe preparo el contenido del mes completo: copies, calendario y hasta ideas de stories. Tú solo publicas.\n\nDesde 199€/mes. ¿Quieres ver un ejemplo de cómo quedaría para tu cuenta?`,
      email: {
        subject: "Tu contenido del mes, listo antes del día 1",
        body: `Hola [Nombre],\n\nEmpezar cada mes sin saber qué publicar consume energía y tiempo.\n\nTe entrego un pack mensual completo de contenido:\n\n✍️ 20 copies listos para publicar\n✍️ Calendario editorial con fechas y formatos\n✍️ Ideas de stories y contenido efímero\n✍️ Adaptado a tu voz y sector\n\nDesde 199€/mes. Entrega garantizada el 25 del mes anterior.\n\n¿Quieres que te prepare un ejemplo gratuito con 3 copies de tu sector?\n\n[Tu nombre]`,
      },
      personal: {
        name: "Marta",
        context: "Nutricionista freelancer, quiere crear contenido pero no sabe qué escribir ni cuándo publicar",
        dm: `Ey Marta 👋\n\nVi que eres nutricionista y que publicas en Instagram, pero noté que el contenido es bastante irregular y a veces pasan semanas entre posts.\n\nApuesto a que el problema no es que no tengas cosas que contar — es que sentarte a escribir cada caption desde cero es un agotamiento.\n\nYo te preparo el contenido del mes entero: 20 textos listos para publicar, calendario con fechas y hasta ideas de stories. Tú solo copias y pegas.\n\nDesde 199€/mes. Si quieres te mando 3 copies de ejemplo sobre nutrición ahora mismo para que veas cómo trabajo. Sin compromiso.`,
        email: {
          subject: "Marta, ¿y si el contenido del mes estuviera listo el día 1?",
          body: `Ey Marta,\n\nTe escribo porque vi tu perfil de nutricionista y me di cuenta de que tienes mucho que aportar — pero la presencia en redes no termina de arrancar de forma constante.\n\nEso pasa casi siempre por lo mismo: sentarse a escribir cada texto desde cero es agotador cuando encima tienes consultas, clientes y todo lo demás.\n\nLo que hago es prepararte el contenido del mes entero antes del día 1:\n\n✍️ 20 copies adaptados a tu voz y tu especialidad\n✍️ Calendario con días, formatos y horarios sugeridos\n✍️ Ideas de stories para complementar los posts\n✍️ Tú solo revisas, apruebas y publicas\n\nDesde 199€/mes. Y si quieres, te preparo 3 copies de ejemplo sobre nutrición gratis para que veas el nivel antes de decidir.\n\n¿Te parece bien?\n\n[Tu nombre]`,
        },
      },
    },
    en: {
      hook: "Do you start every month with no idea what to post?",
      offer: "I deliver a full content pack each month: captions, story ideas and an editorial calendar. You just hit publish.",
      included: [
        "20 ready-to-post captions",
        "Monthly editorial calendar",
        "Story and ephemeral content ideas",
        "Tailored to your tone and industry",
        "Delivered on the 25th of the previous month",
      ],
      cta: "Try the first month and decide →",
      dm: `Hey [Name] 👋\n\nI know writing captions for every post takes way longer than it should.\n\nI prep your full month of content: captions, calendar and even story ideas. You just post.\n\nFrom €199/mo. Want to see a sample of what it would look like for your account?`,
      email: {
        subject: "Your monthly content, ready before the 1st",
        body: `Hi [Name],\n\nStarting every month without knowing what to post drains time and energy.\n\nI deliver a complete monthly content pack:\n\n✍️ 20 ready-to-post captions\n✍️ Editorial calendar with dates and formats\n✍️ Story and ephemeral content ideas\n✍️ Tailored to your voice and industry\n\nFrom €199/month. Delivered on the 25th of the previous month.\n\nWant me to put together a free sample with 3 captions for your industry?\n\n[Your name]`,
      },
      personal: {
        name: "Marta",
        context: "Freelance nutritionist, wants to create content but doesn't know what to write or when to post",
        dm: `Hey Marta 👋\n\nSaw you're a nutritionist posting on Instagram — but I noticed the content is pretty inconsistent and sometimes weeks go by between posts.\n\nI'm guessing it's not that you don't have things to say. It's that sitting down to write each caption from scratch is just exhausting.\n\nI prep your full month of content: 20 captions ready to post, a calendar with dates and story ideas too. You just copy and paste.\n\nFrom €199/mo. Want me to send you 3 example nutrition captions right now so you can see how I work? No strings attached.`,
        email: {
          subject: "Marta, what if your month's content was ready on day 1?",
          body: `Hey Marta,\n\nReached out because I saw your nutritionist profile and I can tell you have a lot to offer — but the social presence isn't quite consistent yet.\n\nThat almost always comes down to the same thing: writing each post from scratch is exhausting when you've already got consultations, clients and everything else going on.\n\nWhat I do is have your full month of content ready before the 1st:\n\n✍️ 20 captions adapted to your voice and specialty\n✍️ Calendar with suggested days, formats and times\n✍️ Story ideas to complement your posts\n✍️ You just review, approve and post\n\nFrom €199/month. And if you want, I'll put together 3 free example nutrition captions so you can see the quality before deciding.\n\nSound good?\n\n[Your name]`,
        },
      },
    },
  },
];

export default function App() {
  const [selected, setSelected] = useState(0);
  const [lang, setLang] = useState("es");
  const [tab, setTab] = useState("offer");
  const [copied, setCopied] = useState(null);

  const offer = offers[selected];
  const content = offer[lang];

  const copy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0d0d0d",
      fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
      color: "#f0f0f0",
      padding: "0",
    }}>
      {/* Top bar */}
      <div style={{
        background: "#111",
        borderBottom: "1px solid #222",
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        <div style={{ fontWeight: 700, fontSize: 15, letterSpacing: "0.04em", color: "#fff" }}>
          OFERTAS · 6 ÁREAS
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          {["es", "en"].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{
              padding: "5px 14px",
              borderRadius: 6,
              border: "none",
              cursor: "pointer",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.06em",
              background: lang === l ? offer.color : "#222",
              color: lang === l ? "#fff" : "#888",
              transition: "all 0.2s",
            }}>{l.toUpperCase()}</button>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", minHeight: "calc(100vh - 57px)" }}>
        {/* Sidebar */}
        <div style={{
          width: 220,
          background: "#111",
          borderRight: "1px solid #1e1e1e",
          padding: "20px 0",
          flexShrink: 0,
        }}>
          {offers.map((o, i) => (
            <button key={i} onClick={() => { setSelected(i); setTab("offer"); }} style={{
              width: "100%",
              padding: "13px 20px",
              background: selected === i ? `${o.color}18` : "transparent",
              border: "none",
              borderLeft: selected === i ? `3px solid ${o.color}` : "3px solid transparent",
              cursor: "pointer",
              textAlign: "left",
              transition: "all 0.15s",
            }}>
              <div style={{ fontSize: 18, marginBottom: 3 }}>{o.emoji}</div>
              <div style={{
                fontSize: 11.5,
                fontWeight: 700,
                color: selected === i ? o.color : "#666",
                letterSpacing: "0.04em",
                lineHeight: 1.3,
              }}>{lang === "es" ? o.area : o.areaEN}</div>
            </button>
          ))}
        </div>

        {/* Main */}
        <div style={{ flex: 1, padding: "32px 36px", overflowY: "auto" }}>

          {/* Header */}
          <div style={{ marginBottom: 28 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 10 }}>
              <span style={{ fontSize: 36 }}>{offer.emoji}</span>
              <div>
                <h1 style={{
                  margin: 0,
                  fontSize: 22,
                  fontWeight: 800,
                  color: "#fff",
                  letterSpacing: "-0.02em",
                }}>{lang === "es" ? offer.area : offer.areaEN}</h1>
                <div style={{ fontSize: 13, color: offer.color, fontWeight: 600, marginTop: 2 }}>
                  {lang === "es" ? offer.tagline : offer.taglineEN}
                </div>
              </div>
              <div style={{
                marginLeft: "auto",
                background: `${offer.color}22`,
                border: `1px solid ${offer.color}55`,
                color: offer.color,
                padding: "6px 16px",
                borderRadius: 20,
                fontSize: 13,
                fontWeight: 700,
              }}>{lang === "es" ? offer.price : offer.priceEN}</div>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", gap: 4, marginBottom: 24, background: "#111", borderRadius: 10, padding: 4, width: "fit-content", flexWrap: "wrap" }}>
            {[
              { key: "offer", label: "📋 Oferta" },
              { key: "dm", label: "💬 DM Genérico" },
              { key: "email", label: "📧 Email Genérico" },
              { key: "personal", label: "🎯 Mensajes Personalizados" },
            ].map(t => (
              <button key={t.key} onClick={() => setTab(t.key)} style={{
                padding: "7px 16px",
                borderRadius: 7,
                border: "none",
                cursor: "pointer",
                fontSize: 12.5,
                fontWeight: 600,
                background: tab === t.key ? offer.color : "transparent",
                color: tab === t.key ? "#fff" : "#666",
                transition: "all 0.15s",
              }}>{t.label}</button>
            ))}
          </div>

          {/* OFFER TAB */}
          {tab === "offer" && (
            <div>
              {/* Hook */}
              <div style={{
                background: `${offer.color}15`,
                border: `1px solid ${offer.color}33`,
                borderRadius: 12,
                padding: "18px 22px",
                marginBottom: 20,
              }}>
                <div style={{ fontSize: 11, color: offer.color, fontWeight: 700, letterSpacing: "0.08em", marginBottom: 6 }}>GANCHO DE APERTURA</div>
                <div style={{ fontSize: 16, color: "#fff", fontWeight: 600, lineHeight: 1.5 }}>"{content.hook}"</div>
              </div>

              {/* Offer text */}
              <div style={{
                background: "#161616",
                border: "1px solid #222",
                borderRadius: 12,
                padding: "18px 22px",
                marginBottom: 20,
              }}>
                <div style={{ fontSize: 11, color: "#888", fontWeight: 700, letterSpacing: "0.08em", marginBottom: 8 }}>PROPUESTA DE VALOR</div>
                <div style={{ fontSize: 15, color: "#ddd", lineHeight: 1.6 }}>{content.offer}</div>
              </div>

              {/* Included */}
              <div style={{
                background: "#161616",
                border: "1px solid #222",
                borderRadius: 12,
                padding: "18px 22px",
                marginBottom: 20,
              }}>
                <div style={{ fontSize: 11, color: "#888", fontWeight: 700, letterSpacing: "0.08em", marginBottom: 12 }}>QUÉ INCLUYE</div>
                {content.included.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
                    <div style={{
                      width: 20, height: 20, borderRadius: "50%",
                      background: offer.color,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, fontSize: 10, fontWeight: 800, color: "#fff", marginTop: 1,
                    }}>✓</div>
                    <div style={{ fontSize: 14, color: "#ccc", lineHeight: 1.5 }}>{item}</div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div style={{
                background: offer.color,
                borderRadius: 12,
                padding: "16px 22px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
                <div style={{ fontSize: 14, color: "#fff", fontWeight: 600 }}>{content.cta}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", fontWeight: 700 }}>{lang === "es" ? offer.price : offer.priceEN}</div>
              </div>
            </div>
          )}

          {/* DM TAB */}
          {tab === "dm" && (
            <div>
              <div style={{
                background: "#161616",
                border: "1px solid #222",
                borderRadius: 12,
                padding: "20px 22px",
                marginBottom: 16,
                position: "relative",
              }}>
                <div style={{ fontSize: 11, color: "#888", fontWeight: 700, letterSpacing: "0.08em", marginBottom: 14 }}>
                  MENSAJE DIRECTO · INSTAGRAM DM
                </div>
                <div style={{
                  fontFamily: "monospace",
                  fontSize: 13.5,
                  color: "#ddd",
                  lineHeight: 1.7,
                  whiteSpace: "pre-wrap",
                }}>{content.dm}</div>
              </div>
              <button onClick={() => copy(content.dm, "dm")} style={{
                width: "100%",
                padding: "13px",
                background: copied === "dm" ? "#2e7d32" : offer.color,
                border: "none",
                borderRadius: 10,
                color: "#fff",
                fontSize: 13,
                fontWeight: 700,
                cursor: "pointer",
                transition: "background 0.2s",
                letterSpacing: "0.04em",
              }}>{copied === "dm" ? "✓ COPIADO" : "COPIAR MENSAJE"}</button>
              <div style={{ marginTop: 14, padding: "12px 16px", background: "#111", borderRadius: 8 }}>
                <div style={{ fontSize: 11, color: "#666", lineHeight: 1.6 }}>
                  💡 <strong style={{ color: "#888" }}>Tip:</strong> Personaliza [Nombre] y menciona algo concreto de su perfil antes de enviar. Los DMs genéricos tienen menos del 5% de respuesta.
                </div>
              </div>
            </div>
          )}

          {/* EMAIL TAB */}
          {tab === "email" && (
            <div>
              <div style={{
                background: "#161616",
                border: "1px solid #222",
                borderRadius: 12,
                padding: "20px 22px",
                marginBottom: 16,
              }}>
                <div style={{ fontSize: 11, color: "#888", fontWeight: 700, letterSpacing: "0.08em", marginBottom: 14 }}>EMAIL DE PROSPECCIÓN</div>
                <div style={{
                  background: "#0d0d0d",
                  borderRadius: 8,
                  padding: "12px 16px",
                  marginBottom: 14,
                  borderLeft: `3px solid ${offer.color}`,
                }}>
                  <div style={{ fontSize: 11, color: "#666", marginBottom: 4 }}>ASUNTO</div>
                  <div style={{ fontSize: 14, color: "#fff", fontWeight: 600 }}>{content.email.subject}</div>
                </div>
                <div style={{
                  fontFamily: "monospace",
                  fontSize: 13,
                  color: "#ddd",
                  lineHeight: 1.75,
                  whiteSpace: "pre-wrap",
                }}>{content.email.body}</div>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <button onClick={() => copy(content.email.subject, "subj")} style={{
                  flex: 1,
                  padding: "12px",
                  background: copied === "subj" ? "#2e7d32" : "#222",
                  border: `1px solid ${offer.color}44`,
                  borderRadius: 10,
                  color: "#fff",
                  fontSize: 12,
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}>{copied === "subj" ? "✓ COPIADO" : "COPIAR ASUNTO"}</button>
                <button onClick={() => copy(content.email.body, "body")} style={{
                  flex: 2,
                  padding: "12px",
                  background: copied === "body" ? "#2e7d32" : offer.color,
                  border: "none",
                  borderRadius: 10,
                  color: "#fff",
                  fontSize: 12,
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}>{copied === "body" ? "✓ COPIADO" : "COPIAR CUERPO DEL EMAIL"}</button>
              </div>
              <div style={{ marginTop: 14, padding: "12px 16px", background: "#111", borderRadius: 8 }}>
                <div style={{ fontSize: 11, color: "#666", lineHeight: 1.6 }}>
                  💡 <strong style={{ color: "#888" }}>Tip:</strong> Envía entre martes y jueves, entre las 9h y las 11h. El asunto corto y directo tiene mayor tasa de apertura.
                </div>
              </div>
            </div>
          )}
          {/* PERSONAL TAB */}
          {tab === "personal" && (
            <div>
              {/* Context badge */}
              <div style={{
                background: `${offer.color}15`,
                border: `1px solid ${offer.color}33`,
                borderRadius: 10,
                padding: "12px 18px",
                marginBottom: 20,
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
              }}>
                <span style={{ fontSize: 18, flexShrink: 0 }}>🎯</span>
                <div>
                  <div style={{ fontSize: 11, color: offer.color, fontWeight: 700, letterSpacing: "0.07em", marginBottom: 4 }}>PERFIL DEL DESTINATARIO DE EJEMPLO</div>
                  <div style={{ fontSize: 13, color: "#ccc", lineHeight: 1.5 }}>
                    <strong style={{ color: "#fff" }}>{content.personal.name}</strong> — {content.personal.context}
                  </div>
                </div>
              </div>

              {/* Personal DM */}
              <div style={{ marginBottom: 20 }}>
                <div style={{
                  display: "flex", alignItems: "center", gap: 8, marginBottom: 10,
                }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>💬 DM de Instagram personalizado</div>
                  <div style={{ fontSize: 11, color: "#555", fontStyle: "italic" }}>— como si lo escribieras tú de verdad</div>
                </div>
                <div style={{
                  background: "#161616",
                  border: `1px solid ${offer.color}33`,
                  borderRadius: 12,
                  padding: "20px 22px",
                  marginBottom: 10,
                }}>
                  <div style={{
                    fontFamily: "monospace",
                    fontSize: 13.5,
                    color: "#ddd",
                    lineHeight: 1.75,
                    whiteSpace: "pre-wrap",
                  }}>{content.personal.dm}</div>
                </div>
                <button onClick={() => copy(content.personal.dm, "pdm")} style={{
                  width: "100%",
                  padding: "11px",
                  background: copied === "pdm" ? "#2e7d32" : offer.color,
                  border: "none",
                  borderRadius: 9,
                  color: "#fff",
                  fontSize: 12,
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "background 0.2s",
                  letterSpacing: "0.04em",
                }}>{copied === "pdm" ? "✓ COPIADO" : "COPIAR DM PERSONALIZADO"}</button>
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: "#222", margin: "24px 0" }} />

              {/* Personal Email */}
              <div>
                <div style={{
                  display: "flex", alignItems: "center", gap: 8, marginBottom: 10,
                }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>📧 Email personalizado</div>
                  <div style={{ fontSize: 11, color: "#555", fontStyle: "italic" }}>— directo, sin sonar a plantilla</div>
                </div>
                <div style={{
                  background: "#161616",
                  border: `1px solid ${offer.color}33`,
                  borderRadius: 12,
                  padding: "20px 22px",
                  marginBottom: 10,
                }}>
                  <div style={{
                    background: "#0d0d0d",
                    borderRadius: 8,
                    padding: "10px 14px",
                    marginBottom: 14,
                    borderLeft: `3px solid ${offer.color}`,
                  }}>
                    <div style={{ fontSize: 11, color: "#555", marginBottom: 3 }}>ASUNTO</div>
                    <div style={{ fontSize: 14, color: "#fff", fontWeight: 600 }}>{content.personal.email.subject}</div>
                  </div>
                  <div style={{
                    fontFamily: "monospace",
                    fontSize: 13,
                    color: "#ddd",
                    lineHeight: 1.75,
                    whiteSpace: "pre-wrap",
                  }}>{content.personal.email.body}</div>
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  <button onClick={() => copy(content.personal.email.subject, "psubj")} style={{
                    flex: 1,
                    padding: "11px",
                    background: copied === "psubj" ? "#2e7d32" : "#222",
                    border: `1px solid ${offer.color}44`,
                    borderRadius: 9,
                    color: "#fff",
                    fontSize: 12,
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "background 0.2s",
                  }}>{copied === "psubj" ? "✓ COPIADO" : "COPIAR ASUNTO"}</button>
                  <button onClick={() => copy(content.personal.email.body, "pbody")} style={{
                    flex: 2,
                    padding: "11px",
                    background: copied === "pbody" ? "#2e7d32" : offer.color,
                    border: "none",
                    borderRadius: 9,
                    color: "#fff",
                    fontSize: 12,
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "background 0.2s",
                  }}>{copied === "pbody" ? "✓ COPIADO" : "COPIAR CUERPO DEL EMAIL"}</button>
                </div>
              </div>

              {/* Tip */}
              <div style={{ marginTop: 16, padding: "12px 16px", background: "#111", borderRadius: 8 }}>
                <div style={{ fontSize: 11, color: "#666", lineHeight: 1.6 }}>
                  💡 <strong style={{ color: "#888" }}>Cómo usarlo:</strong> Cambia el nombre y adapta el detalle específico que mencionas de su perfil. Ese detalle concreto es lo que marca la diferencia entre un mensaje que se lee y uno que se ignora.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
