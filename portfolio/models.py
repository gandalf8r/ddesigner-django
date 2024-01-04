from django.db import models
from django.urls import reverse


class Cv(models.Model):
    content = models.TextField(blank=True)

    def __str__(self):
        return self.content

    class Meta:
        verbose_name = "CV"
        verbose_name_plural = "CV"


class Web(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True, db_index=True)
    content = models.TextField(blank=True)
    image = models.ImageField(upload_to='images/web')
    big_image = models.ImageField(upload_to='images/web/big', default='path/to/my/default/image.jpg')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "WEB works"
        verbose_name_plural = "WEB works"

    def get_absolute_url(self):
        return reverse('web_project', kwargs={'web_project_slug': self.slug})


class Graphic(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True, db_index=True)
    content = models.TextField(blank=True)
    image = models.ImageField(upload_to='images/graphic')
    big_image = models.ImageField(upload_to='images/graphic/big', default='path/to/my/default/image.jpg')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "GRAPHIC works"
        verbose_name_plural = "GRAPHIC works"

    def get_absolute_url(self):
        return reverse('graphic_project', kwargs={'graphic_project_slug': self.slug})


class Mail(models.Model):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    subject = models.CharField(max_length=255)
    message = models.TextField(blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Mail"
        verbose_name_plural = "Mail"
