import { SkeletonElement } from "./Skeleton";
import { Shimmer } from "./Shimmer";

export function SkeletonData () {

    return (
    <div className={`skeleton-wrapper`}>
        <div className="skeleton-article">
            <SkeletonElement typer="title" />
            <SkeletonElement typer="text" />
        </div>
        <Shimmer />
    </div>
    );
}