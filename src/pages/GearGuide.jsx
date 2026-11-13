import Displays from "../componant/gear/Displays";
import Ergonomics from "../componant/gear/Ergonomics";
import Header from "../componant/gear/Header";
import MKeyboards from "../componant/gear/MKeyboards";
import Navigation from "../componant/gear/Navigation";

const GearGuide = () => {
    return (
        <div className="bg-[#0b0f17] pt-25 min-h-screen text-base-content px-4 md:px-8 py-6">
            <div className="w-9/12 mx-auto space-y-12">

                {/* Header start */}
                <Header />
                {/* header end */}

                {/* Navigation Tabs Start */}
                <Navigation />
                {/* Navigation Tabs end */}

                {/* Displays start */}
                <Displays />
                {/* Displays end */}

                {/* Mechanical Keyboards Start */}
                <MKeyboards />
                {/* Mechanical Keyboards end */}

                {/* Ergonomics start */}
                <Ergonomics />
                {/* Ergonomics end */}
            </div>
        </div>
    );
};

export default GearGuide;