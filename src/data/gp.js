
import ausgp from "../styling/assets/tracks/ausgp.png";

// From https://ergast.com/api/f1/2020.json
export const races = [
    {
        season: "2020",
        round: "1",
        url: "https://en.wikipedia.org/wiki/2020_Australian_Grand_Prix",
        raceName: "Australian Grand Prix",
        nameShort: "Australian GP",
        trackImg: ausgp,
        Circuit: {
            circuitId: "albert_park",
            url: "http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit",
            circuitName: "Albert Park Grand Prix Circuit",
            Location: {
                lat: "-37.8497",
                long: "144.968",
                locality: "Melbourne",
                country: "Australia"
            }
        },
        sessions: {
            p1: "2020-03-13/01:00:00Z",
            p2: "2020-03-13/05:00:00Z",
            p3: "2020-03-14/03:00:00Z",
            qualy: "2020-03-14/06:00:00Z",
            race: "2020-03-15/05:10:00Z"
        },
        desc: "As a temporary facility, Albert Park can be quite bumpy, while the circuit at the start of the weekend is often slippery, rubbering in as the sessions progress. It’s also a circuit that requires a well-sorted chassis, with several spots on the track where the drivers require a reactive front end to allow them to chuck it into a corner – the main one being the rapid Turn 11-12 chicane. Melbourne is also one of the faster tracks on the calendar, with Lewis Hamilton’s 2019 pole lap set at an average of over 235km/h.",
        tickets: "https://motorsporttickets.com/en-gb/f1/australia/tickets",
        winners: ["2019: Bottas", "2018: Vettel", "2017: Vettel"],
        extended: false,
    },
    {
        season: "2020",
        round: "2",
        url: "https://en.wikipedia.org/wiki/2020_Bahrain_Grand_Prix",
        raceName: "Bahrain Grand Prix",
        nameShort: "Bahrain GP",
        trackImg: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Bahrain_Circuit.png.transform/7col-retina/image.png",
        Circuit: {
            circuitId: "bahrain",
            url: "http://en.wikipedia.org/wiki/Bahrain_International_Circuit",
            circuitName: "Bahrain International Circuit",
            Location: {
                lat: "26.0325",
                long: "50.5106",
                locality: "Sakhir",
                country: "Bahrain"
            }
        },
        sessions: {
            p1: "2020-03-20/11:00:00Z",
            p2: "2020-03-20/15:00:00Z",
            p3: "2020-03-21/12:00:00Z",
            qualy: "2020-03-21/15:00:00Z",
            race: "2020-03-22/15:10:00Z"
        },
        desc: "",
        tickets: "https://motorsporttickets.com/en-gb/f1/bahrain/tickets",
        winners: ["2019: Hamilton", "2018: Vettel", "2017: Vettel"],
        extended: false,
    },
    {
        season: "2020",
        round: "3",
        url: "https://en.wikipedia.org/wiki/2020_Vietnamese_Grand_Prix",
        raceName: "Vietnamese Grand Prix",
        nameShort: "Vietnamese GP",
        Circuit: {
            circuitId: "hanoi",
            url: "http://en.wikipedia.org/wiki/Hanoi_Street_Circuit",
            circuitName: "Hanoi Street Circuit",
            Location: {
                lat: "21.0166",
                long: "105.766",
                locality: "Hanoi",
                country: "Vietnam"
            }
        },
        sessions: {
            p1: "2020-04-03/05:00:00Z",
            p2: "2020-04-03/09:00:00Z",
            p3: "2020-04-04/06:00:00Z",
            qualy: "2020-04-04/09:00:00Z",
            race: "2020-04-05/06:10:00Z"
        },
        desc: "",
        tickets: "https://motorsporttickets.com/en-gb/f1/vietnam/tickets",
        winners: ["First race in 2020"],
        extended: false,
    },
    {
        season: "2020",
        round: "4",
        url: "https://en.wikipedia.org/wiki/2020_Chinese_Grand_Prix",
        raceName: "Chinese Grand Prix",
        nameShort: "Chinese GP (DELAYED)",
        Circuit: {
            circuitId: "shanghai",
            url: "http://en.wikipedia.org/wiki/Shanghai_International_Circuit",
            circuitName: "Shanghai International Circuit",
            Location: {
                lat: "31.3389",
                long: "121.22",
                locality: "Shanghai",
                country: "China"
            }
        },
        sessions: {
            p1: "2020-04-17/02:00:00Z",
            p2: "2020-04-17/06:00:00Z",
            p3: "2020-04-18/03:00:00Z",
            qualy: "2020-04-18/06:00:00Z",
            race: "2020-04-19/05:10:00Z"
        },
        desc: "",
        tickets: "https://motorsporttickets.com/en-gb/f1/china/tickets",
        winners: ["2019: Hamilton", "2018: Ricciardo", "2017: Hamilton"],
        extended: false,
    },
    {
        season: "2020",
        round: "5",
        url: "https://en.wikipedia.org/wiki/2020_Dutch_Grand_Prix",
        raceName: "Dutch Grand Prix",
        nameShort: "Dutch GP",
        Circuit: {
            circuitId: "zandvoort",
            url: "http://en.wikipedia.org/wiki/Circuit_Zandvoort",
            circuitName: "Circuit Park Zandvoort",
            Location: {
                lat: "52.3888",
                long: "4.54092",
                locality: "Zandvoort",
                country: "Netherlands"
            }
        },
        sessions: {
            p1: "2020-05-01/09:00:00Z",
            p2: "2020-05-01/13:00:00Z",
            p3: "2020-05-02/10:00:00Z",
            qualy: "2020-05-02/13:00:00Z",
            race: "2020-05-03/13:10:00Z"
        },
        desc: "",
        tickets: "https://motorsporttickets.com/en-gb/f1/netherlands/tickets",
        winners: ["Returning race"],
        extended: false,
    },
    {
        season: "2020",
        round: "6",
        url: "https://en.wikipedia.org/wiki/2020_Spanish_Grand_Prix",
        raceName: "Spanish Grand Prix",
        nameShort: "Spanish GP",
        Circuit: {
            circuitId: "catalunya",
            url: "http://en.wikipedia.org/wiki/Circuit_de_Barcelona-Catalunya",
            circuitName: "Circuit de Barcelona-Catalunya",
            Location: {
                lat: "41.57",
                long: "2.26111",
                locality: "Montmeló",
                country: "Spain"
            },
            desc: "",
            tickets: "",
            winners: []
        },
        sessions: {
            p1: "2020-05-08/09:00:00Z",
            p2: "2020-05-08/13:00:00Z",
            p3: "2020-05-09/10:00:00Z",
            qualy: "2020-05-09/13:00:00Z",
            race: "2020-05-10/13:10:00Z"
        },
        desc: "The first Spanish Grand Prix in 1913 was not actually run to the Grand Prix formula of the day, but to touring car rules, taking place on a 300-kilometre road circuit at Guadarrama, near Madrid, on the road to Valladolid. Motor racing events had taken place in Spain prior to that—the most notable among them being the Catalan Cup of 1908 and 1909, on roads around Sitges, near Barcelona. Both of these events were won by Jules Goux, helping to establish a strong racing tradition in Spain, which has continued to this day. This enthusiasm for racing led to the plan to build a permanent track at Sitges—a 2-kilometre (1.2 mi) oval that became known as Sitges-Terramar, and was the site of the 1923 Spanish Grand Prix. ",
        tickets: "https://motorsporttickets.com/en-gb/f1/spain/tickets",
        winners: ["2019: Hamilton", "2018: Hamilton", "2017: Hamilton"],
        extended: false,
    },
    {
        season: "2020",
        round: "7",
        url: "https://en.wikipedia.org/wiki/2020_Monaco_Grand_Prix",
        raceName: "Monaco Grand Prix",
        nameShort: "Monaco GP",
        Circuit: {
            circuitId: "monaco",
            url: "http://en.wikipedia.org/wiki/Circuit_de_Monaco",
            circuitName: "Circuit de Monaco",
            Location: {
                lat: "43.7347",
                long: "7.42056",
                locality: "Monte-Carlo",
                country: "Monaco"
            }
        },
        sessions: {
            p1: "2020-05-21/09:00:00Z",
            p2: "2020-05-21/13:00:00Z",
            p3: "2020-05-23/10:00:00Z",
            qualy: "2020-05-23/13:00:00Z",
            race: "2020-05-24/13:10:00Z"
        },
        desc: "Like many European races, the Monaco Grand Prix predates the current World Championship. The principality's first Grand Prix was organised in 1929 by Antony Noghès, under the auspices of Prince Louis II, through the Automobile Club de Monaco (ACM), of which he was president.[9] The ACM organised the Rallye Automobile Monte Carlo, and in 1928 applied to the Association Internationale des Automobiles Clubs Reconnus (AIACR), the international governing body of motorsport, to be upgraded from a regional French club to full national status. Their application was refused due to the lack of a major motorsport event held wholly within Monaco's boundaries. The rally could not be considered as it mostly used the roads of other European countries.[10]",
        tickets: "https://motorsporttickets.com/en-gb/f1/monaco/tickets",
        winners: ["2019: Hamilton", "2018: Ricciardo", "2017: Vettel"],
        extended: false,
    },
    {
        season: "2020",
        round: "8",
        url: "https://en.wikipedia.org/wiki/2020_Azerbaijan_Grand_Prix",
        raceName: "Azerbaijan Grand Prix",
        nameShort: "Azerbaijan GP",
        Circuit: {
            circuitId: "BAK",
            url: "http://en.wikipedia.org/wiki/Baku_City_Circuit",
            circuitName: "Baku City Circuit",
            Location: {
                lat: "40.3725",
                long: "49.8533",
                locality: "Baku",
                country: "Azerbaijan"
            }
        },
        sessions: {
            p1: "2020-06-05/09:00:00Z",
            p2: "2020-06-05/13:00:00Z",
            p3: "2020-06-06/10:00:00Z",
            qualy: "2020-06-06/13:00:00Z",
            race: "2020-06-07/12:10:00Z"
        },
        desc: "",
        tickets: "https://motorsporttickets.com/en-gb/f1/azerbaijan/tickets",
        winners: ["2019: Bottas", "2018: Hamilton", "2017: Ricciardo"],
        extended: false,
    },
    {
        season: "2020",
        round: "9",
        url: "https://en.wikipedia.org/wiki/2020_Canadian_Grand_Prix",
        raceName: "Canadian Grand Prix",
        nameShort: "Canadian GP",
        Circuit: {
            circuitId: "villeneuve",
            url: "http://en.wikipedia.org/wiki/Circuit_Gilles_Villeneuve",
            circuitName: "Circuit Gilles Villeneuve",
            Location: {
                lat: "45.5",
                long: "-73.5228",
                locality: "Montreal",
                country: "Canada"
            }
        },
        sessions: {
            p1: "2020-06-12/15:00:00Z",
            p2: "2020-06-12/19:00:00Z",
            p3: "2020-06-13/15:00:00Z",
            qualy: "2020-06-13/18:00:00Z",
            race: "2020-06-14/18:10:00Z"
        },
        desc: "The early Canadian Grand Prix was one of the premier events of the new Canadian Sports Car Championship, a series which had been created alongside the Canadian Grand Prix at Mosport Park near Toronto in 1961. Mosport Park (which is still in its original layout configuration) was a spectacular and challenging circuit that had lots of ups and downs; the circuit was popular with drivers. Several international sports car as well as Formula One drivers participated in the event. For the first five years, the event would be won by drivers with either prior Formula One experience, or would enter the championship after winning the Canadian Grand Prix. In 1966 the Canadian-American Challenge Cup ran the event, with American Mark Donohue winning.[1] Formula One took over the following year, although the CSCC and Can-Am series continued to compete at Mosport in their own events. ",
        tickets: "https://motorsporttickets.com/en-gb/f1/canada/tickets",
        winners: ["2019: Bottas", "2018: Vettel", "2017: Hamilton"],
        extended: false,
    },
    {
        season: "2020",
        round: "10",
        url: "https://en.wikipedia.org/wiki/2020_French_Grand_Prix",
        raceName: "French Grand Prix",
        nameShort: "French GP",
        Circuit: {
            circuitId: "ricard",
            url: "http://en.wikipedia.org/wiki/Paul_Ricard_Circuit",
            circuitName: "Circuit Paul Ricard",
            Location: {
                lat: "43.2506",
                long: "5.79167",
                locality: "Le Castellet",
                country: "France"
            }
        },
        sessions: {
            p1: "2020-06-26/09:00:00Z",
            p2: "2020-06-26/13:00:00Z",
            p3: "2020-06-27/10:00:00Z",
            qualy: "2020-06-28/13:00:00Z",
            race: "2020-06-28/13:10:00Z"
        },
        desc: "",
        tickets: "https://motorsporttickets.com/en-gb/f1/france/tickets",
        winners: ["2019: Bottas", "2018: Hamilton"],
        extended: false,
    },
    {
        season: "2020",
        round: "11",
        url: "https://en.wikipedia.org/wiki/2020_Austrian_Grand_Prix",
        raceName: "Austrian Grand Prix",
        nameShort: "Austrian GP",
        Circuit: {
            circuitId: "red_bull_ring",
            url: "http://en.wikipedia.org/wiki/Red_Bull_Ring",
            circuitName: "Red Bull Ring",
            Location: {
                lat: "47.2197",
                long: "14.7647",
                locality: "Spielburg",
                country: "Austria"
            }
        },
        sessions: {
            p1: "2020-07-03/09:00:00Z",
            p2: "2020-07-03/13:00:00Z",
            p3: "2020-07-04/10:00:00Z",
            qualy: "2020-07-04/13:00:00Z",
            race: "2020-07-05/13:10:00Z"
        },
        desc: "In July 2013, it was reported that the circuit's new owners Red Bull GmbH had reached an agreement with Bernie Ecclestone to revive the Austrian Grand Prix after a ten-year absence from the calendar. The race was given a provisional date of July 2014. And on 6 December, the officially released calendar included the Austrian Grand Prix on it.",
        tickets: "https://motorsporttickets.com/en-gb/f1/austria/tickets",
        winners: ["2019: Verstappen", "2018: Verstappen", "2017: Bottas"],
        extended: false,
    },
    {
        season: "2020",
        round: "12",
        url: "https://en.wikipedia.org/wiki/2020_British_Grand_Prix",
        raceName: "British Grand Prix",
        nameShort: "British GP",
        Circuit: {
            circuitId: "silverstone",
            url: "http://en.wikipedia.org/wiki/Silverstone_Circuit",
            circuitName: "Silverstone Circuit",
            Location: {
                lat: "52.0786",
                long: "-1.01694",
                locality: "Silverstone",
                country: "UK"
            }
        },
        sessions: {
            p1: "2020-07-17/09:00:00Z",
            p2: "2020-07-17/13:00:00Z",
            p3: "2020-07-18/10:00:00Z",
            qualy: "2020-07-18/13:00:00Z",
            race: "2020-07-19/13:10:00Z"
        },
        desc: "",
        tickets: "https://motorsporttickets.com/en-gb/f1/britain/tickets",
        winners: ["2019: Hamilton", "2018: Vettel", "2017: Hamilton"],
        extended: false,
    },
    {
        season: "2020",
        round: "13",
        url: "https://en.wikipedia.org/wiki/2020_Hungarian_Grand_Prix",
        raceName: "Hungarian Grand Prix",
        nameShort: "Hungarian GP",
        Circuit: {
            circuitId: "hungaroring",
            url: "http://en.wikipedia.org/wiki/Hungaroring",
            circuitName: "Hungaroring",
            Location: {
                lat: "47.5789",
                long: "19.2486",
                locality: "Budapest",
                country: "Hungary"
            }
        },
        sessions: {
            p1: "2020-07-31/09:00:00Z",
            p2: "2020-07-31/13:00:00Z",
            p3: "2020-08-01/10:00:00Z",
            qualy: "2020-08-01/13:00:00Z",
            race: "2020-08-02/13:10:00Z"
        },
        desc: "The first Hungarian Grand Prix was held on 21 June 1936 over a 3.1-mile (5.0 km) track laid out in Népliget,[1] a park in Budapest. The Mercedes-Benz, Auto Union, and the Alfa Romeo-equipped Ferrari teams all sent three cars and the event drew a very large crowd. However, politics and the ensuing war meant the end of Grand Prix motor racing in the country for fifty years. ",
        tickets: "https://motorsporttickets.com/en-gb/f1/hungary/tickets",
        winners: ["2019: Hamilton", "2018: Hamilton", "2017: Vettel"],
        extended: false,
    },
    {
        season: "2020",
        round: "14",
        url: "https://en.wikipedia.org/wiki/2020_Belgian_Grand_Prix",
        raceName: "Belgian Grand Prix",
        nameShort: "Belgian GP",
        Circuit: {
            circuitId: "spa",
            url: "http://en.wikipedia.org/wiki/Circuit_de_Spa-Francorchamps",
            circuitName: "Circuit de Spa-Francorchamps",
            Location: {
                lat: "50.4372",
                long: "5.97139",
                locality: "Spa",
                country: "Belgium"
            }
        },
        sessions: {
            p1: "2020-08-28/09:00:00Z",
            p2: "2020-08-29/13:00:00Z",
            p3: "2020-08-29/10:00:00Z",
            qualy: "2020-08-29/13:00:00Z",
            race: "2020-08-30/13:10:00Z"
        },
        desc: "",
        tickets: "https://motorsporttickets.com/en-gb/f1/belgium/tickets",
        winners: ["2019: Leclerc", "2018: Vettel", "2017: Hamilton"],
        extended: false,
    },
    {
        season: "2020",
        round: "15",
        url: "https://en.wikipedia.org/wiki/2020_Italian_Grand_Prix",
        raceName: "Italian Grand Prix",
        nameShort: "Italian GP",
        Circuit: {
            circuitId: "monza",
            url: "http://en.wikipedia.org/wiki/Autodromo_Nazionale_Monza",
            circuitName: "Autodromo Nazionale di Monza",
            Location: {
                lat: "45.6156",
                long: "9.28111",
                locality: "Monza",
                country: "Italy"
            }
        },
        sessions: {
            p1: "2020-09-04/09:00:00Z",
            p2: "2020-09-04/13:00:00Z",
            p3: "2020-09-05/10:00:00Z",
            qualy: "2020-09-05/13:00:00Z",
            race: "2020-09-06/13:10:00Z"
        },
        desc: "Motor racing has always been extremely popular in Italy, the first Italian Grand Prix motor racing championship took place on 4 September 1921 at a 10.7-mile (17.3 km) circuit near Montichiari, which had been the site of the Gordon Bennett races in the early 1900s. However, the race is more closely associated with the course at Monza, a racing facility just outside the northern city of Milan, which was built in 1922 in time for that year's race, and has been the location for most of the races over the years. ",
        tickets: "https://motorsporttickets.com/en-gb/f1/italy/tickets",
        winners: ["2019: Leclerc", "2018: Hamilton", "2017: Hamilton"],
        extended: false,
    },
    {
        season: "2020",
        round: "16",
        url: "https://en.wikipedia.org/wiki/2020_Singapore_Grand_Prix",
        raceName: "Singapore Grand Prix",
        nameShort: "Singapore GP",
        Circuit: {
            circuitId: "marina_bay",
            url: "http://en.wikipedia.org/wiki/Marina_Bay_Street_Circuit",
            circuitName: "Marina Bay Street Circuit",
            Location: {
                lat: "1.2914",
                long: "103.864",
                locality: "Marina Bay",
                country: "Singapore"
            }
        },
        sessions: {
            p1: "2020-09-18/08:30:00Z",
            p2: "2020-09-18/12:30:00Z",
            p3: "2020-09-19/10:00:00Z",
            qualy: "2020-09-19/13:00:00Z",
            race: "2020-09-20/12:10:00Z"
        },
        desc: "Announced in 2008, an agreement for a five-year deal was signed by Singapore GP Pte Ltd, the Singapore Tourism Board and Bernie Ecclestone. In November 2007 it was announced that the telecommunications company Singtel would sponsor the event, and also they televised the show on Channel 5 called SingTel Grid Girls. The official name of the event became the Formula 1 SingTel Singapore Grand Prix.[3] The race was co-funded by the Government of Singapore, footing 60% of the total bill, or S$90 million, out of a total tab of S$150 million. Around 110,000 tickets were made available for the country's first Formula One race. Corporate hospitality suites and packages went on sale at the end November 2007, three-day passes to the public went on sale in February 2008. Single-day passes went on sale a month later.[15] The event went on to achieve a full sell-out for all of its tickets.[16] The 2008 race hosted the famous Amber Lounge after party and in 2010 Singapore became the second location to host the Amber Lounge Fashion show. ",
        tickets: "https://motorsporttickets.com/en-gb/f1/singapore/tickets",
        winners: ["2019: Vettel", "2018: Hamilton", "2017: Hamilton"],
        extended: false,
    },
    {
        season: "2020",
        round: "17",
        url: "https://en.wikipedia.org/wiki/2020_Russian_Grand_Prix",
        raceName: "Russian Grand Prix",
        nameShort: "Russian GP",
        Circuit: {
            circuitId: "sochi",
            url: "http://en.wikipedia.org/wiki/Sochi_Autodrom",
            circuitName: "Sochi Autodrom",
            Location: {
                lat: "43.4057",
                long: "39.9578",
                locality: "Sochi",
                country: "Russia"
            }
        },
        sessions: {
            p1: "2020-09-25/08:00:00Z",
            p2: "2020-09-25/12:00:00Z",
            p3: "2020-09-26/09:00:00Z",
            qualy: "2020-09-26/12:00:00Z",
            race: "2020-09-27/11:10:00Z"
        },
        desc: "",
        tickets: "https://motorsporttickets.com/en-gb/f1/russia/tickets",
        winners: ["2019: Hamilton", "2018: Hamilton", "2017: Bottas"],
        extended: false,
    },
    {
        season: "2020",
        round: "18",
        url: "https://en.wikipedia.org/wiki/2020_Japanese_Grand_Prix",
        raceName: "Japanese Grand Prix",
        nameShort: "Japanese GP",
        Circuit: {
            circuitId: "suzuka",
            url: "http://en.wikipedia.org/wiki/Suzuka_Circuit",
            circuitName: "Suzuka Circuit",
            Location: {
                lat: "34.8431",
                long: "136.541",
                locality: "Suzuka",
                country: "Japan"
            }
        },
        sessions: {
            p1: "2020-10-09/02:00:00Z",
            p2: "2020-10-09/06:00:00Z",
            p3: "2020-10-10/03:00:00Z",
            qualy: "2020-10-10/06:00:00Z",
            race: "2020-10-11/04:10:00Z"
        },
        desc: "The first Japanese Grand Prix was run as a sports car race at the Suzuka Circuit 80 kilometres (50 mi) south west of Nagoya in May 1963. In 1964, the race was held at Suzuka again. This marked the beginning of motor racing in earnest in Japan. For the next eight installments, however, the non-championship Grand Prix was run at the Fuji Speedway, 40 miles (64 km) west of Yokohama and 66 miles (106 km) west of the Japanese capital of Tokyo. The circuit had a banked corner called Daiichi and was the scene of many fatal accidents. It was then run as a number of disciplines of motorsports, particularly Formula 2, sports cars and Can-Am-type sprint racing. ",
        tickets: "https://motorsporttickets.com/en-gb/f1/japan/tickets",
        winners: ["2019: Bottas", "2018: Hamilton", "2017: Hamilton"],
        extended: false,
    },
    {
        season: "2020",
        round: "19",
        url: "https://en.wikipedia.org/wiki/2020_United_States_Grand_Prix",
        raceName: "United States Grand Prix",
        nameShort: "United States GP",
        Circuit: {
            circuitId: "americas",
            url: "http://en.wikipedia.org/wiki/Circuit_of_the_Americas",
            circuitName: "Circuit of the Americas",
            Location: {
                lat: "30.1328",
                long: "-97.6411",
                locality: "Austin",
                country: "USA"
            }
        },
        sessions: {
            p1: "2020-10-23/17:00:00Z",
            p2: "2020-10-23/21:00:00Z",
            p3: "2020-10-24/19:00:00Z",
            qualy: "2020-10-24/22:00:00Z",
            race: "2020-10-25/19:10:00Z"
        },
        desc: "On May 25, 2010, Austin, Texas, was awarded the race on a ten-year contract, as Ecclestone and event promoter Full Throttle Productions agreed to a deal beginning in 2012. The event is being held on a purpose-built new track, which was named Circuit of the Americas. German architect and track designer Hermann Tilke designed the new track on 800 acres (320 ha) of land to the east of the city.[58] In July 2010, promoter Tavo Hellmund promised that the circuit would be one of the 'most challenging and spectacular in the world' and that it would include a selection of corner sequences inspired by 'the very best circuits' in the world.",
        tickets: "https://motorsporttickets.com/en-gb/f1/united-states/tickets",
        winners: ["2019: Bottas", "2018: Räikkönen", "2017: Hamilton"],
        extended: false,
    },
    {
        season: "2020",
        round: "20",
        url: "https://en.wikipedia.org/wiki/2020_Mexican_Grand_Prix",
        raceName: "Mexico City Grand Prix",
        nameShort: "Mexico City GP",
        Circuit: {
            circuitId: "rodriguez",
            url:
                "http://en.wikipedia.org/wiki/Aut%C3%B3dromo_Hermanos_Rodr%C3%ADguez",
            circuitName: "Autódromo Hermanos Rodríguez",
            Location: {
                lat: "19.4042",
                long: "-99.0907",
                locality: "Mexico City",
                country: "Mexico"
            }
        },
        sessions: {
            p1: "2020-10-30/17:00:00Z",
            p2: "2020-10-30/21:00:00Z",
            p3: "2020-10-31/16:00:00Z",
            qualy: "2020-10-31/19:00:00Z",
            race: "2020-11-01/19:10:00Z"
        },
        desc: "",
        tickets: "https://motorsporttickets.com/en-gb/f1/mexico/tickets",
        winners: ["2019: Hamilton", "2018: Vertsappen", "2017: Vertsappen"],
        extended: false,
    },
    {
        season: "2020",
        round: "21",
        url: "https://en.wikipedia.org/wiki/2020_Brazilian_Grand_Prix",
        raceName: "Brazilian Grand Prix",
        nameShort: "Brazilian GP",
        Circuit: {
            circuitId: "interlagos",
            url:
                "http://en.wikipedia.org/wiki/Aut%C3%B3dromo_Jos%C3%A9_Carlos_Pace",
            circuitName: "Autódromo José Carlos Pace",
            Location: {
                lat: "-23.7036",
                long: "-46.6997",
                locality: "São Paulo",
                country: "Brazil"
            }
        },
        sessions: {
            p1: "2020-11-13/14:00:00Z",
            p2: "2020-11-13/18:00:00Z",
            p3: "2020-11-14/15:00:00Z",
            qualy: "2020-11-14/18:00:00Z",
            race: "2020-11-15/17:10:00Z"
        },
        desc: "Motor racing started in Brazil before World War II, with races on the 6.9-mile Gávea street circuit in Rio de Janeiro starting in 1934. In 1936 construction began on Brazil's first permanent autodrome in the São Paulo neighborhood of Interlagos and was finished in 1940. Brazil held Grands Prix during the early parts of WWII at Interlagos and Gavea. Interlagos, a circuit inspired in layout by the Roosevelt Raceway in the United States quickly gained a reputation as being a tough and demanding circuit with many challenging corners, elevation changes, a rough surface, and little room for error. ",
        tickets: "https://motorsporttickets.com/en-gb/f1/brazil/tickets",
        winners: ["2019: Verstappen", "2018: Hamilton", "2017: Vettel"],
        extended: false,
    },
    {
        season: "2020",
        round: "22",
        url: "https://en.wikipedia.org/wiki/2020_Abu_Dhabi_Grand_Prix",
        raceName: "Abu Dhabi Grand Prix",
        nameShort: "Abu Dhabi GP",
        Circuit: {
            circuitId: "yas_marina",
            url: "http://en.wikipedia.org/wiki/Yas_Marina_Circuit",
            circuitName: "Yas Marina Circuit",
            Location: {
                lat: "24.4672",
                long: "54.6031",
                locality: "Abu Dhabi",
                country: "UAE"
            }
        },
        sessions: {
            p1: "2020-11-27/09:00:00Z",
            p2: "2020-11-27/13:00:00Z",
            p3: "2020-11-28/10:00:00Z",
            qualy: "2020-11-28/13:00:00Z",
            race: "2020-11-29/13:10:00Z"
        },
        desc: "Formula 1 first came to Abu Dhabi in 2007 in the guise of the first ever Formula One Festival. Announced in January 2007, the event which took place on 3 February 2007 was free, and the largest gathering of current Formula One cars and drivers outside of a Grand Prix. At the festival it was announced that Abu Dhabi had won the rights to host a Grand Prix from 2009 until 2016. Later that year, Etihad Airways negotiated a three-year deal for them to become sponsors of the Grand Prix.",
        tickets: "https://motorsporttickets.com/en-gb/f1/abu-dhabi/tickets",
        winners: ["2019: Hamilton", "2018: Hamilton", "2017: Bottas"],
        extended: false,
    }
];
