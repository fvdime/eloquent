"use client"

import React, { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import { useSpring, motion } from 'framer-motion';
import Vignette from './vignette';
import { PostTypes } from '@/libs/types';
import Link from 'next/link';

// MOCKUP DATA
const data = [
  {
    id: 1,
    title: "Real Men",
    description: "Though honestly sir, all I wanna do. Is get naked in front of you.",
    image: "/malice.jpg",
    content: "Real men don't need other people. And real men suck it in. Real men don't flinch or bleed in public. Oh, I think I'm a real man. Little boys cry and look around for comfort. And always get what they want. Little boys see toys and say, I can take that! Oh, you are my little boy. Though honestly sir, all I wanna do. Is get naked in front of you. So you can look me up and down. And tell me, Well done girl, you're looking good Real men keep cool in the face of a fire Go down with the ship And real men don't eat, 'cause they're above that, damn it Oh, I'm gonna be a real man Though honestly sir, all I wanna do Is get naked in front of you So you can look me up and down. And give me your love for being so good. But little boys hold me, color me. Praise me, make me feel lovely. For a little while. So little boy, say you want me Cause when I can't take it, go ahead. Do it, do it",
  },
  {
    id: 2,
    title: "Angst",
    description: "Die Rücken nass, die Hände klamm Alle haben Angst Schwarzer Mann",
    content: "Wenn die Kinder unerzogen Schon der Vater hat gedroht Der schwarze Mann, er wird dich holen Wenn du nicht folgst meinem Gebot Und das glauben wir bis heute So in Angst sind Land und Leute Etwas Schlimmes wird geschehen Das Böse kommt, wird nicht mehr gehen Und die Furcht wächst in die Nacht Tür und Tore sind bewacht Die Rücken nass, die Hände klamm Alle haben Angst vorm schwarzen Mann In Dunkelheit schleicht er heran Bist du nicht brav, fasst er dich an Traue keinem Fremden dann So viel Albtraum, so viel Wahn Und so glauben wir bis heute Schwer bewaffnet ist die Meute Ach, sie können es nicht lassen Schreien Feuer in die Gassen Und die Furcht wächst in die Nacht Gar kein Auge zugemacht Der Rücken nass, die Hände klamm Alle haben Angst vorm schwarzen Mann Wer hat Angst vorm schwarzen Mann? Wer hat Angst vorm schwarzen Mann? Wer hat Angst vorm schwarzen Mann? Wer hat Angst? Und die Furcht wächst in die Nacht Gar kein Auge zugemacht Die Rücken nass, die Hände klamm Alle haben Angst Schwarzer Mann Schwarzer Mann",
    image: "/malice.jpg",
  },
  {
    id: 3,
    title: "¿Y si fuera ella?",
    description: "¿Quién me dice si era ella? Y si la vida es una rueda",
    image: "/malice.jpg",
    content: "Ella se desliza y me atropella Y aunque a veces no me importe Sé que el día que la pierda volveré a sufrir Por ella, que aparece y que se esconde Que se marcha y que se queda Que es pregunta y es respuesta Que es mi oscuridad, mi estrella No, no Ella me peina el alma y me la enreda Va conmigo pero no sé dónde va Mi rival, mi compañera Que está tan dentro de mi vida Y a la vez está tan fuera Sé que volveré a perderme Y la encontraré de nuevo Pero con otro rostro y otro nombre Diferente y otro cuerpo Pero sigue siendo ella Que otra vez me lleva Nunca me responde Si al girar la rueda Ella se hace fría y se hace eterna Un suspiro en la tormenta A la que tantas veces le cambió la voz Gente que va y que viene y siempre es ella Que me miente y me lo niega Que me olvida y me recuerda Pero si mi boca se equivoca Pero si mi boca se equivoca Y al llamarla nombro a otra A veces siente compasión Por este loco, ciego y loco corazón Sea lo que quiera Dios que sea Mi delito es la torpeza de ignorar Que hay quien no tiene corazón Y va quemando, va quemándome y me quema ¿Y si fuera ella? Ella me peina el alma y me la enreda Va conmigo, digo yo Mi rival, mi compañera, esa es ella Pero me cuesta cuando otro adiós se ve tan cerca Y la perderé de nuevo, y otra vez preguntaré Mientras se va y no habrá respuesta Y si esa que se aleja La que estoy perdiendo ¿Y si esa era? ¿Y si fuera ella? Sea lo que quiera Dios que sea Mi delito es la torpeza de ignorar Que hay quien no tiene corazón Y va quemando, va quemándome y me quema ¿Y si fuera ella? A veces siente compasión Por este loco, ciego y loco corazón ¿Era? ¿Quién me dice si era ella? Y si la vida es una rueda Y va girando y nadie sa cuándo tiene que saltar Y la miro ¿y si fuera ella? No  si fuera ella? Oh, yeah ¿Y si fuera ella?",
  }
]

interface HomeProps {
  featuredPosts: PostTypes[];
}

export default function CursorFollower({ featuredPosts }: HomeProps) {

  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1
  }

  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring)
  }

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time:any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  const mouseTracker = (e: any) => {
    const { clientX, clientY } = e;
    const targetX = clientX - (window.innerWidth / 2 * 0.25);
    const targetY = clientY - (window.innerWidth / 2 * 0.30);

    mousePosition.x.set(targetX);
    mousePosition.y.set(targetY);
  } 

  return (
    <main onMouseMove={mouseTracker} className='h-full w-full py-16'>
      <div className='max-w-screen-lg mx-auto p-4 md:p-0'>
        <div className='flex flex-row justify-center items-center gap-1 w-full mb-8'>
        <h1 className='text-4xl lg:text-6xl font-PlayfairDisplay'>Loud Thoughts</h1>
        <hr className="w-full h-0.5 mx-auto border-0 rounded md:my-10 bg-zinc-300" />
        <Link href="/work" className='text-2xl lg:text-4xl font-PlayfairDisplay text-end'>See All</Link>

        </div>
        {
          featuredPosts.map((item: PostTypes) => {
            return <Vignette mousePosition={mousePosition} item={item} key={item.id}/>
          })
        }
      </div>
    </main>
  )
}
