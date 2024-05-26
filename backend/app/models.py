from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager, Group, Permission
from django.db.models.signals import pre_save
from django.dispatch import receiver


class CustomUserManager(BaseUserManager):
    def create_user(self, username, email, user_type, password=None, **extra_fields):
        if not username:
            raise ValueError('The username must be set')
        if not user_type:
            raise ValueError('The user type must be set')
        user = self.model(username=username, email=email,
                          user_type=user_type, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email, user_type, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(username, email, user_type, password, **extra_fields)


class CustomUser(AbstractBaseUser, PermissionsMixin):
    USER_TYPE_CHOICES = (
        ('student', 'Student'),
        ('admin', 'Admin'),
    )

    username = models.CharField(max_length=100, unique=True)
    full_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    contact = models.CharField(max_length=15)
    user_type = models.CharField(max_length=20, choices=USER_TYPE_CHOICES, default='admin')
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False, null=True, blank=True)

    groups = models.ManyToManyField(
        Group,
        related_name='customuser_groups',  # Change the related_name to avoid clashes
        blank=True,
        help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.',
        related_query_name='customuser',
    )
    user_permissions = models.ManyToManyField(
        Permission,
        # Change the related_name to avoid clashes
        related_name='customuser_permissions',
        blank=True,
        help_text='Specific permissions for this user.',
        related_query_name='customuser',
    )

    objects = CustomUserManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['user_type', 'email']

    def has_perm(self, perm, obj=None):
        # Handle custom permissions logic here
        return True

    def has_module_perms(self, app_label):
        # Handle custom module permissions logic here
        return True

    def __str__(self):
        return self.username


class Student(models.Model):
    user = models.OneToOneField(
        CustomUser, on_delete=models.CASCADE)  # Relationship

    def __str__(self):
        return self.reg_no
