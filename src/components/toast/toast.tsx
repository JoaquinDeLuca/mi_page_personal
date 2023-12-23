"use client"
import { useEffect, useState } from 'react';
import style from './toast.module.css'

interface Props {
    message: string;
    duration?: number;
    show: boolean,
    onClose: () => void;
}

export default function toast({ message, duration = 3000, show, onClose }: Props) {

    const [showToast, setShowToast] = useState(show);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowToast(false);
            onClose();
        }, duration);

        return () => {
            clearTimeout(timer);
        };
    }, [duration]);


    return showToast ? (
        <div className={style.toast}>
            <p>{message}</p>
        </div>
    ) : null;
}
