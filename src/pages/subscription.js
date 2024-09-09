import SubscriptionCard from "../components/SubscriptionCard";
function Subscription() {
  return (
    <div className="mt-4 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  ">
      {cards.map((card) => {
        return <SubscriptionCard data={card} />;
      })}
    </div>
  );
}

export default Subscription;

const cards = [
  {
    title: "Basic",
    price: "4999",
    dettails: [
      "50 chats/day",
      "1500 chats/month",
      "Web & WhatsApp Support",
      " It is an intelligent AI capable of answering all customer questions upto the maximum details.",
      " Clearly Understands almost all basic questions and gives them suitable responses.",
    ],
  },
  {
    title: "Basic +",
    price: "10999",
    dettails: [
      "50 chats/day",
      "4500 chats/month",
      "Web & WhatsApp Support",
      " It is an intelligent AI capable of answering all customer questions upto the maximum details.",
      " Clearly Understands almost all basic questions and gives them suitable responses.",
    ],
  },
  {
    title: "Advanced",
    price: "20999 ",
    dettails: [
      "50 chats/day",
      "1500 chats/month",
      "Web & WhatsApp Support",
      "The most advanced AI developed till now. Can make mathematical analysis and respond the questions according.",
      "Understand complete detail of the customer questions and Provids more nuanced responses.",
    ],
  },
  {
    title: "Enterprise",
    price: null,
    description:
      "For organizations that require a custom plan tailored to their needs. Contact us for an enterprise plan if you want volume based discounts, enterprise-level SLAs, dedicated support, priority access to features, or need custom data and team management controls.",
  },
];
