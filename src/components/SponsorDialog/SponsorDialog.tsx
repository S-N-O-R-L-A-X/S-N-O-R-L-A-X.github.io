import { Bar, Button, Dialog, DialogPropTypes } from "@ui5/webcomponents-react";
import { MouseEventHandler } from "react";
import { createPortal } from "react-dom";

interface SponsorDialogProps extends DialogPropTypes {
	closeHandler: MouseEventHandler<HTMLButtonElement>;
}

export default function SponsorDialog(props: SponsorDialogProps) {
	const { open, closeHandler, ...rest } = props;
	return (
		createPortal(
			<Dialog open={open} {...rest} footer={<Bar design="Footer" endContent={<button onClick={closeHandler}>Close</button>} />}></Dialog>,
			document.body
		)
	)
}