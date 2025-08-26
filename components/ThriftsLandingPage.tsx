"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {  Sparkles, } from "lucide-react";

export default function ThriftsLandingPage() {

  return (
    <div className=" bg-gradient-to-b from-white via-[#fafafa] to-white text-slate-900">
      
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <Badge className="mb-4" variant="secondary">AI-first marketplace</Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              The marketplace that <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-800 to-orange-500">sells for you</span>
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Thrifts uses AI to optimize listings, bundle items, and match buyers and sellers in real-time.
              Native to mobile money (hello, M-Pesa) and built for fashion and everyday goods.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="lg" className="rounded-2xl px-8 border border-orange-500 text-orange-500">
                <Sparkles className="mr-2 h-4 w-4 " /> Get started free
              </Button>
              <a href="/featured" className="text-slate-700 hover:text-slate-900 text-sm">Explore featured shops →</a>
            </div>
            <div className="mt-6 text-xs text-slate-500">No credit card required • Free for early merchants</div>
          </motion.div>

          
        </div>
      </section>
      
    </div>
  );
}

