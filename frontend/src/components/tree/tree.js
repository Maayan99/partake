import LSystem from 'lindenmayer';
import {useEffect, useRef} from "react";


const presets = [
    {
        name: 'Basic',
        axiom: 'X',
        productions: {
            'F': 'FF',
            'X': 'F-[[X]+X]+FL[+FX]-X',
        },
    },
    {
        name: 'Leaf galore',
        axiom: 'X',
        productions: {
            'F': 'FF',
            'X': 'F-L[[X]+X]+FL[+FX]-XL',
        },
    },
    {
        name: 'The lone woves',
        axiom: 'X',
        productions: {
            'F': 'FF',
            'X': 'F-L[[FX]+FX]+FL[+FX]-XL',
        },
    },
    {
        name: 'Leaf galore',
        axiom: 'X',
        productions: {
            'F': 'FF',
            'X': 'F-L[[X]+X]+FL[+FX]-XL',
        },
    },
];


export default function Tree() {
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


        const preset = presets[0];


        const tree = new LSystem({
            axiom: preset.axiom,
            productions: preset.productions,
            finals: {
                '+': () => {
                    ctx.rotate((Math.PI / 180) * 28);
                },
                '-': () => {
                    ctx.rotate((Math.PI / 180) * -28);
                },
                'F': () => {
                    const shouldDraw = shouldDrawBranches[branchIndex];

                    if (shouldDraw) {
                        ctx.strokeStyle = branchColor;
                        ctx.beginPath();
                        ctx.moveTo(0, 0);
                        ctx.lineTo(0, 50 / (tree.iterations + 1));
                        ctx.stroke()
                        ctx.translate(0, 50 / (tree.iterations + 1));
                    }

                    branchIndex++;
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
        const numOfBranches = treeString.split('F').length - 1;

        const branches = treeString.match(/(F)\1*/g);


        const branchTiers = [];

        branches.map(branch => {
            const tier = 4 - Math.log2(branch.length);
            for (let i = 0; i < branch.length; i++) {
                branchTiers.push(tier);
            }
        });


        const leaves = [];

        for (let i = 0; i < numOfLeaves; i++) {
            leaves[i] = false;
        }

        const shouldDrawBranches = [];

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.translate(canvas.width / 2, canvas.height)
            ctx.rotate((Math.PI / 180) * 180);
            ctx.lineWidth = age * age * 2.2;
            ctx.scale(age * age, age * age);
            tree.final();
            ctx.setTransform(1, 0, 0, 1, 0, 0);

            if (age < 1) {
                age += 0.0075;

                for (let i = 0; i < numOfLeaves; i++) {
                    if (!leaves[i]) {
                        leaves[i] = Math.random() * age > 0.7;
                    }
                }

                for (let i = 0; i < numOfBranches; i++) {
                    if (!shouldDrawBranches[i]) {
                        if (branchTiers[i] < (age * tree.iterations) + 1) {
                            shouldDrawBranches[i] = Math.random() > 0.9;
                        }
                    }
                }

                requestAnimationFrame(function () {
                    animate(age);
                });

                leafIndex = 0;
                branchIndex = 0;
            }
        }

        animate(age);

        return (() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        })

    }, [canvasRef.current, canvasRef.current?.getContext("2d")]);


    return <canvas id="canvas" width={400} height={400} ref={canvasRef} className="w-1/2"/>;
}