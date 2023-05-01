import BlueButton from "@components/components/common/blue-button";
import {useEffect, useRef} from "react";

import LSystem from 'lindenmayer';

export default function Dashboard() {
    const canvasRef = useRef(null);


    useEffect(() => {
        if (!canvasRef.current) return; // Exit if canvas is not ready

        const canvas = canvasRef.current;

        const ctx = canvas.getContext("2d");

        if (!ctx) {
            return;
        }

        let age = 0;
        let leafIndex = 0;
        let branchIndex = 0;

        const branchColor = '#5C4033';


        const tree = new LSystem({
            axiom: 'X',
            productions: {
                'F': 'FF',
                'X': 'F-[[X]+X]+FL[+FX]-X',
            },
            finals: {
                '+': () => {
                    ctx.rotate((Math.PI / 180) * 28);
                },
                '-': () => {
                    ctx.rotate((Math.PI / 180) * -28);
                },
                'F': () => {
                    const shouldDraw = tree.iterations*age > branchTiers[branchIndex];

                    if (shouldDraw) {
                        ctx.strokeStyle = branchColor;
                        ctx.beginPath();
                        ctx.moveTo(0, 0);
                        ctx.lineTo(0, 50 / (tree.iterations + 1));
                        ctx.stroke()
                        ctx.translate(0, 50 / (tree.iterations + 1));
                        branchIndex++;
                    }
                },
                'L': () => {
                    const shouldDraw = leaves[leafIndex];

                    if (shouldDraw) {
                        ctx.rotate((Math.PI / 180) * 25);
                        ctx.fillStyle = "green";
                        ctx.strokeStyle = "green";
                        ctx.beginPath();
                        ctx.moveTo(0, 0);
                        ctx.lineTo(2, -3);
                        ctx.lineTo(0, -10);
                        ctx.lineTo(-2, -2);
                        ctx.lineTo(0, 0);
                        ctx.closePath();
                        ctx.fill();
                        ctx.stroke();
                        ctx.rotate((Math.PI / 180) * -25);
                    }

                    leafIndex++;
                },
                '[': () => {
                    ctx.save();
                },
                ']': () => {
                    ctx.restore();
                }
            }
        })

        const treeString = tree.iterate(4);

        const numOfLeaves = treeString.split('L').length - 1;

        const branches = treeString.match(/(F)\1*/g);


        let branchTiers = [];

        branches.map(branch => {
            const tier = 4 - Math.log2(branch.length);
            for (let i = 0; i < branch.length; i++) {
                branchTiers.push(tier);
            }
        });

        console.log(branchTiers);

        const leaves = [];

        for (let i = 0; i < numOfLeaves; i++) {
            leaves[i] = false;
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.translate(canvas.width / 2, canvas.height)
            ctx.rotate((Math.PI / 180) * 180);
            ctx.lineWidth = age * age * 2.2;
            // ctx.scale(age * age, age * age);
            tree.final();
            ctx.setTransform(1, 0, 0, 1, 0, 0);

            if (age < 1) {
                age += 0.0075;

                for (let i = 0; i < numOfLeaves; i++) {
                    if (!leaves[i]) {
                        leaves[i] = Math.random() * age > 0.7;
                    }
                }

                requestAnimationFrame(function () {
                    animate(age);
                });

                leafIndex = 0;
            }
        }

        animate(age);

        return (() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        })

    }, [canvasRef.current, canvasRef.current?.getContext("2d")]);

    const profileImage = `/assets/PNG/profile_image_1.jpeg`

    const handleLogout = () => {
        sessionStorage.setItem('loggedIn', 'false');
        sessionStorage.removeItem('userId');
        window.location.href = '/';
    }

    return (
        <div className="flex space-x-8">
            <img src={profileImage} alt="Profile image" className="rounded-full
            w-52 h-52 outline outline-offset-8 outline-blue outline-2 object-cover"/>
            <BlueButton onClick={handleLogout} className="h-max">Logout</BlueButton>
            <canvas id="canvas" width={400} height={400} ref={canvasRef} className="border"/>
        </div>
    );
};