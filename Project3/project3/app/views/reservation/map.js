function (doc)
{
	if (doc._id.substr(0,12)==="reservation:")
		{
			emit(doc._id.substr(12),
			{
			"lastName": doc.lastName,
			"phoneNumber": doc.phoneNumber,
			"restaurant": doc.restaurant,
			"numberOfPeople": doc.numberOfPeople
			});
		}
};