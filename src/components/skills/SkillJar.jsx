import { motion } from "framer-motion";

function SkillJar({
    name,
    percent,
    color = "bg-green-500",
}) {

    const leaves = Math.round(percent / 10);

    return (

        <motion.div
            whileHover={{
                y: -10,
                rotate: 1,
            }}
            className="
                glass
                rounded-3xl
                p-6
                text-center
            "
        >

            <div
                className="
                    mx-auto
                    w-40
                    h-56
                    rounded-[40px]
                    border-4
                    border-white
                    bg-white/40
                    shadow-xl
                    relative
                    overflow-hidden
                "
            >

                <motion.div

                    initial={{
                        height:0,
                    }}

                    whileInView={{
                        height:`${percent}%`,
                    }}

                    transition={{
                        duration:1.5,
                    }}

                    className={`
                        absolute
                        bottom-0
                        left-0
                        w-full
                        ${color}
                        opacity-20
                    `}
                />

                <div
                    className="
                        absolute
                        bottom-3
                        left-0
                        w-full
                        flex
                        flex-wrap
                        justify-center
                        gap-1
                        px-3
                    "
                >

                    {

                        [...Array(leaves)].map((_,i)=>(

                            <motion.div

                                key={i}

                                initial={{
                                    opacity:0,
                                    y:40,
                                }}

                                whileInView={{
                                    opacity:1,
                                    y:0,
                                }}

                                transition={{
                                    delay:i*.08,
                                }}

                                className="text-xl"

                            >

                                🍃

                            </motion.div>

                        ))

                    }

                </div>

            </div>

            <h3 className="mt-6 text-xl font-bold">

                {name}

            </h3>

            <p className="text-green-700 font-semibold">

                {percent}%

            </p>

        </motion.div>

    );

}

export default SkillJar;