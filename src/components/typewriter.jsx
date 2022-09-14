import TypeIt from "typeit-react";

export default () => {
    return (
        <div className="p-14 font-primary font-bold text-CCHSwhite text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            <TypeIt
                getBeforeInit={(instance) => {
                    instance
                        .type("Your Home for All Things Irish ")
                        .pause(1000)
                        .type("Baseball")
                        .pause(1000)
                        .delete(8)
                        .type("Basketball")
                        .pause(1000)
                        .delete(10)
                        .type("Cheerleading")
                        .pause(1000)
                        .delete(12)
                        .type("Cross Country")
                        .pause(1000)
                        .delete(13)
                        .type("Field Hockey")
                        .pause(1000)
                        .delete(12)
                        .type("Football")
                        .pause(1000)
                        .delete(8)
                        .type("Golf")
                        .pause(1000)
                        .delete(4)
                        .type("Lacrosse")
                        .pause(1000)
                        .delete(8)
                        .type("Soccer")
                        .pause(1000)
                        .delete(6)
                        .type("Softball")
                        .pause(1000)
                        .delete(8)
                        .type("Swimming")
                        .pause(1000)
                        .delete(8)
                        .type("Track")
                        .pause(1000)
                        .delete(5)
                        .type("Volleyball")
                        .pause(1000)
                        .delete(10)
                        .type("Wrestling")
                        .pause(3000)
                        .delete(9)
                        .type("Athletics.");
                    return instance;
                }}
            />
        </div>
    );
};