import Head from "next/head"
import React, { useState, useEffect } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Layout } from "@/components/layout"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"



export default function IndexPage() {
  return (
    <Layout>
        <Head>
          <title>Hey Me</title>
          <meta
            name="description"
            content="This project  allows users to create a video message and schedule it to be
           sent to their future self at a specified date and time."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10 justify-center ">
          <div className="flex max-w-[980px] flex-col items-center  text-center gap-2">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
              Say hello to the future you.
            </h1>
            <p className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl  ">
              Make a video message for your future self and schedule its automatic delivery for a designated date and time of your choosing.
            </p>
          </div>


        </section>
        <section className="container grid  items-center gap-6 pt-6 pb-8 md:py-10 justify-center ">
          <div className="flex items-center justify-center space-x-8">
            <Link href={"/recording"}>
              <Button type="button" className="mt-5">
                Record a message
              </Button>
            </Link>

            <Link href={''}>
              <Button className="mt-5 mr-5" type="button">
                Learn how it&apos;s built
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap	gap-6 justify-center">
            Video goes here
          </div>

            <Testimonials />

        </section>
        <Footer />
      </Layout>
    

  )
}
