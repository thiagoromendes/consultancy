'use client'

import dynamic from "next/dynamic";

export const ClientLocaleMap = dynamic(
    () => import("./LocaleMap").then((mod) => mod.LocaleMap),
    {ssr: false}
)