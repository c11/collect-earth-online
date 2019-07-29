import React from "react";

export function FormLayout({ title, children }) {
    return (
        <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 border bg-lightgray mb-5">
                <div className="bg-darkgreen mb-3 no-container-margin">
                    <h1>{title}</h1>
                </div>
                {children}
            </div>
        </div>
    );
}

export function SectionBlock({ title, children }) {
    return (
        <div className={title === "Survey Rules Design" ? "row m-1" : "row mb-3"}>
            <div className="col">
                <h2 className="header px-0">{title}</h2>
                {children}
            </div>
        </div>
    );
}

export function StatsCell({ title, children }) {
    return (
        <div className="row mb-2">
            <div className="col-7">
                {title}
            </div>
            <div className="col-2">
                <span className="badge badge-pill bg-lightgreen">{children}</span>
            </div>
        </div>
    );
}

export function StatsRow({ title, plots, analysisTime }) {
    return (
        <div className="StatsRow row mx-1 py-1 border-bottom">
            <div className="col-8">{title}</div>
            <div className="col-2">
                <span className="badge badge-pill bg-lightgreen">{plots} plots </span>
            </div>
            <div className="col-2">
                {analysisTime ?
                    (
                        <span className="badge badge-pill bg-lightgreen">{analysisTime} sec/plot </span>
                    )
                    : ("Untimed")
                }
            </div>
        </div>
    );
}
