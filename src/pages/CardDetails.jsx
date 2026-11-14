
import { Link, NavLink, useParams } from "react-router";
import ViewsCard from "../componant/home/ViewsCard";

const CardDetails = () => {

    const { id } = useParams();

    // Find single card by ID
    const singleView = ViewsCard.find((view) => view.id === id);

    // If data not found
    if (!singleView) {
        return (
            <div className="min-h-screen bg-[#0b0f17] text-white flex items-center justify-center">
                <h1 className="text-3xl font-bold">No Data Found!</h1>
            </div>
        );
    }

    return (
        <div className="bg-[#0b0f17] text-white px-4 mt-13 py-20 grid gap-10">
            <div className="w-11/12 mx-auto lg:w-9/12">
                <NavLink
                    to={`/setups`}
                >
                    <h1>
                        ← Back to Setups
                    </h1>
                </NavLink>
            </div>

            {/* Photos and Info */}
            <div className="w-11/12 mx-auto flex flex-col lg:flex-row gap-5 border-b pb-10 border-base-300  lg:w-9/12">

                {/* Photos */}
                <div className="w-full lg:w-7/12">

                    {/* Big Photo */}
                    <div>
                        <img
                            className="w-full border rounded-md"
                            src={singleView.images[0]}
                            alt={singleView.title}
                        />
                    </div>

                    {/* Bottom Photos */}
                    <div className="grid grid-cols-3 gap-2 pt-2">

                        {singleView.images.map((image, index) => (
                            <Link key={index} to="#">
                                <img
                                    className="w-full h-28 object-cover border rounded-md"
                                    src={image}
                                    alt={`${singleView.title} ${index + 1}`}
                                />
                            </Link>
                        ))}

                    </div>
                </div>

                {/* Info */}
                <div className="w-full lg:w-5/12 grid gap-5">

                    {/* Categories */}
                    <ul className="flex gap-3 flex-wrap">
                        {singleView.categories.map((category, index) => (
                            <li
                                key={index}
                                className="px-3 py-1 text-sm rounded-full bg-white/10"
                            >
                                {category}
                            </li>
                        ))}
                    </ul>

                    {/* Title */}
                    <h1 className="text-3xl font-bold">
                        {singleView.title}
                    </h1>

                    {/* User */}
                    <div className="flex flex-wrap items-center gap-4">

                        {/* Avatar */}
                        <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-xl font-semibold">
                            {singleView.author.name}
                        </div>

                        {/* User Name and Address */}
                        <div className="flex-1">
                            <h1 className="font-semibold">
                                {singleView.author.username}
                            </h1>

                            <p className="text-sm text-gray-400">
                                {singleView.author.role} · {singleView.author.location}
                            </p>
                        </div>

                        {/* Votes */}
                        <h1 className="font-bold">
                            {singleView.upvotes.toLocaleString()}
                        </h1>

                        {/* Save Icon */}
                        <div>
                            <i class="fa-solid fa-bookmark"></i>
                        </div>

                    </div>

                    {/* JSON Details */}
                    <div>
                        <h1 className="font-bold text-lg mb-3">
                            {singleView.specs.fileName}
                        </h1>

                        <div className="overflow-x-auto">
                            <table className="table text-white">
                                <tbody>

                                    {singleView.specs.items.map((item, index) => (
                                        <tr key={index}>
                                            <td className="text-gray-400">
                                                {item.label}
                                            </td>

                                            <th className="text-right">
                                                {item.value}
                                            </th>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Tags */}
                    <div>
                        <ul className="flex gap-2 flex-wrap">
                            {singleView.specs.tags.map((tag, index) => (
                                <li
                                    key={index}
                                    className="px-3 py-1 rounded-md bg-white/10 text-sm"
                                >
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>

            {/* About */}
            <div className="grid gap-4 w-11/12 mx-auto lg:w-9/12">

                <h1 className="text-2xl font-bold">
                    About this setup
                </h1>

                {singleView.about.map((paragraph, index) => (
                    <p
                        key={index}
                        className="text-gray-400 leading-7"
                    >
                        {paragraph}
                    </p>
                ))}

            </div>

        </div>
    );
};

export default CardDetails;
