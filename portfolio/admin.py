from django.contrib import admin
from django.utils.safestring import mark_safe

from .models import Web, Graphic, Mail, Cv


@admin.register(Web)
class WebAdmin(admin.ModelAdmin):
    fields = ['title', 'slug', 'content', 'image', 'preview_image', 'big_image', 'long_image']
    readonly_fields = ['preview_image', 'long_image']
    list_display = ['title', 'slug', 'content', 'preview_image', 'long_image']

    @admin.display(description="preview image")
    def preview_image(self, web: Web):
        if web.image:
            return mark_safe(f"<img src='{web.image.url}' width=100>")
        return "No preview"

    @admin.display(description="big image")
    def long_image(self, web: Web):
        if web.big_image:
            return mark_safe(f"<img src='{web.big_image.url}' width=100>")
        return "No big image"


@admin.register(Graphic)
class GraphicAdmin(admin.ModelAdmin):
    fields = ['title', 'slug', 'content', 'image', 'preview_image', 'big_image', 'long_image']
    readonly_fields = ['preview_image', 'long_image']
    list_display = ['title', 'slug', 'content', 'preview_image', 'long_image']

    @admin.display(description="preview image")
    def preview_image(self, graphic: Graphic):
        if graphic.image:
            return mark_safe(f"<img src='{graphic.image.url}' width=100>")
        return "No preview"

    @admin.display(description="big image")
    def long_image(self, graphic: Graphic):
        if graphic.big_image:
            return mark_safe(f"<img src='{graphic.big_image.url}' width=100>")
        return "No big image"


admin.site.register(Mail)
admin.site.register(Cv)
