"use client";
import React, { useEffect } from "react";
import { detectCountryBasedOnOrigin } from "@/utils";
import { useRouter } from "next/navigation";
import ReactFlagsSelect from "react-flags-select";

const CountrySelection = () => {
    const router = useRouter();
    let host = null;

    useEffect(() => {
        host = typeof window !== undefined ? window.origin : null;
    }, [])
    return (
        <>
            <ReactFlagsSelect
                countries={["US", "CA", "AU", "IN"]}
                selected={detectCountryBasedOnOrigin(host)}
                onSelect={(countryCode: string) => {
                    console.log("Country Selected:", countryCode);
                    countryCode === 'IN' ? router.push(
                        `https://proreckonsolutions.in`
                    ) : router.push(
                        `https://${countryCode.toLowerCase()}.proreckonsolutions.com`
                    );
                }}
                placeholder="Select Country"
                className="w-full [&>button]:bg-dark [&>button]border-0 [&>button]:text-white [&>button]:my-3 text-secondary caption1 py-0"
            />
        </>
    );
};

export default CountrySelection;
