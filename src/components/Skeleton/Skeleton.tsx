import React from 'react';
import './Skeleton.scss';


export function SkeletonElement({typer}: {typer: string}) {

    const classes = `skeleton ${typer}`;

    return <div className={classes}></div>
}