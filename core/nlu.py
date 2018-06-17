from watson_developer_cloud import NaturalLanguageUnderstandingV1
from watson_developer_cloud.natural_language_understanding_v1 \
  import Features, EntitiesOptions, KeywordsOptions, CategoriesOptions, MetadataOptions, RelationsOptions, \
  SemanticRolesOptions


def insights(text):
  natural_language_understanding = NaturalLanguageUnderstandingV1(
    username='a15f73ba-f9d2-4ec5-8c0a-195d77769096',
    password='0l13SnXgAXw2',
    version='2018-03-16')

  response = natural_language_understanding.analyze(
    text=text,
    features=Features(
      entities=EntitiesOptions(
        emotion=True,
        sentiment=True,
        limit=2),
      categories=CategoriesOptions(),
      relations=RelationsOptions(),
      keywords=KeywordsOptions(
        emotion=True,
        sentiment=True,
        limit=2)))

  return response