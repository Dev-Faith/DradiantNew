export default function StatsSection() {
    return (
        <section className="py-16 md:py-32" id="stats">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <div className="relative z-10 max-w-xl space-y-6">
                    <h2 className="text-4xl font-medium lg:text-5xl">The Artisan Craft Ecosystem Brings Elegance to Every Bag.
                    </h2>
                    <p>
                    Our handcrafted bags are more than just accessories. <span className="font-medium">They represent an entire ecosystem</span> — where creativity, craftsmanship, and sustainability come together.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div>
                        <p>We are committed to quality, ensuring that every stitch, fabric, and design element reflects authenticity and style.</p>
                        <div className="mb-12 mt-12 grid grid-cols-2 gap-2 md:mb-0">
                            <div className="space-y-4">
                                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">+300</div>
                                <p>Custom Handcrafted Bags</p>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">+150</div>
                                <p>Happy Customers</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <blockquote className="border-l-4 pl-4">
                            <p>Crafting with Dradiantbags has been an incredible experience. The attention to detail and sustainable approach make these bags truly one-of-a-kind.</p>

                            <div className="mt-6 space-y-3">
                                <cite className="block font-medium">Faith Adebayo, CEO</cite>
                                <img className="h-5 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/nvidia.svg" alt="Nvidia Logo" height="20" width="auto" />
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    )
}
