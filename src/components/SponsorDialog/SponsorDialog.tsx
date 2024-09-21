import { Bar, Button, Dialog, DialogPropTypes, FlexBox } from "@ui5/webcomponents-react";
import { MouseEventHandler } from "react";
import { createPortal } from "react-dom";
import styles from "./SponsorDialog.module.css";
import alipay from "../../assets/alipay.jpg";
import wechatpay from "../../assets/wechatpay.png"

interface SponsorDialogProps extends DialogPropTypes {
	closeHandler: MouseEventHandler<HTMLButtonElement>;
}

export default function SponsorDialog(props: SponsorDialogProps) {
	const { open, closeHandler, ...rest } = props;
	return (
		createPortal(
			<Dialog headerText="付款方式" open={open} {...rest} footer={<Bar design="Footer" endContent={<button onClick={closeHandler}>Close</button>} />}>
				<FlexBox justifyContent="SpaceBetween" className={styles.dialogContent}>
					<img className={styles.picture} src={alipay}></img>
					<img className={styles.picture} src={wechatpay}></img>
				</FlexBox>
			</Dialog>,
			document.body
		)
	)
}