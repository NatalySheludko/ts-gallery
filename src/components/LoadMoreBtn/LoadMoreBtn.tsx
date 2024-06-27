import { FC } from "react";
import css from "../LoadMoreBtn/LoadMoreBtn.module.css";
import { BtnProps } from "./LoadMoreBtn.types";

export const LoadMoreBtn: FC<BtnProps> = ({onClick})=> {
	return (
		<button className={css.btn} onClick={onClick}>Load more</button>
	)
}