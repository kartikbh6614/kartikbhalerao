import React from "react";
import { ContactForm } from "@/components/ContactForm";
import { CalComBooking } from "@/components/CalComBooking";
import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="min-h-screen w-full text-foreground relative bg-white dark:bg-zinc-900">

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">

          {/* Heading — centered */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
              Get in{" "}
              <span className="animate-gradient-text">Touch</span>
            </h1>
            <p className="mt-4 text-base text-slate-500 dark:text-slate-400 mx-auto max-w-md">
              Have a project in mind or just want to talk product? I'm always up for a good conversation.
            </p>
          </div>

          {/* Contact form */}
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>

          {/* Cal.com booking */}
          <div className="mt-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
              <span className="text-sm text-slate-400 dark:text-slate-500 font-medium whitespace-nowrap">
                or book a meeting directly
              </span>
              <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
            </div>
            <CalComBooking
              calUsername="kartik-bhalerao-qqae1f"
              eventType="secret"
            />
          </div>

        </section>
      </div>
      <FooterSection />
    </>
  );
}
