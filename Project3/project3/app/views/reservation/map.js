function (doc)
{
	if (doc._id.substr(0,12)==="reservation:")
		{
			emit(doc._id.substr(12),
			{
			"Last Name": doc.lastName,
			"Phone Number": doc.phoneNumber,
			"Restaurant": doc.restaurant,
			"Number Of people": doc.numberOfPeople
			});
		}
};