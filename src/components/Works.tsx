"use client"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface Projects {
  id: string;
}

const Works = async () => {
  const res = (await fetch("https://portfoliostrapicms.onrender.com/api/projects?populate=*"));
  const data = await res.json();
  const projects = data.data;

  const [resapi, setresapi]= useState([])
  setresapi(projects)
  return (
    <div className="py-0 md:py-8">
      <div className="grid md:grid-cols-3 max-md:grid-rows-2 gap-32 items-center content-center">
        <h1 className="col-span-2">what I&apos;ve been up to lately</h1>
        <p className="col-span-1 w-full md:w-2/3 opacity-70 text-3xl">Bridging the gap between beautiful and bottom-line results.</p>
      </div>
      <div className="mt-8 grid max-md:grid-cols-1 grid-cols-2 content-center gap-4">
        {resapi?.slice(0,4).map((item,i) => 
          <div
            key={i}
            className="bg- rounded-lg md:p-4 group min-h-[512px] md:border-2 border-black/10 md:shadow-2xl"
          >
            <div className="relative mb-8 h-96 w-full overflow-clip rounded-xl">
              <Image
                src={item.bannerimage[0].url}
                className="object-cover duration-500 group-hover:scale-125"
                alt=""
                fill
                priority
              />
            </div>
            <h3 className="text-3xl font-normal mb-2">{item.title}</h3>
            <Button asChild>
              <Link href={"works/"+item.slug}>Read more</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Works;