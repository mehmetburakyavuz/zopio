'use client';

import dynamic from "next/dynamic";

// Use dynamic import for Link component in a client component
const ClientLink = dynamic(() => import("next/link"), { ssr: false });

export default ClientLink;
